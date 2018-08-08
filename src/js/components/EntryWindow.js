import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addEntry, editEntry, closeEntry } from '../actions';

const mapStateToProps = state => {
  return { entries: state.entries, entryWindow: state.entryWindow };
};

const mapDispatchToProps = dispatch => {
  return {
    addEntry: entry => dispatch(addEntry(entry)),
    editEntry: entry => dispatch(editEntry(entry)),
    closeEntry: () => dispatch(closeEntry())
  };
};

class ConnectedEntryWindow extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: ''
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidMount() {
    const { entries, entryWindow } = this.props;
    if (entryWindow.id) {
      const activeEntry = entries.filter(
        entry => entry.id === entryWindow.id
      )[0];
      this.setState({
        name: activeEntry.name,
        description: activeEntry.description
      });
    }
  }

  _handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  _handleSubmit(event) {
    event.preventDefault();
    const { name, description } = this.state;
    if (this.props.entryWindow.id) {
      this.props.editEntry({
        name,
        description,
        id: this.props.entryWindow.id
      });
    } else {
      this.props.addEntry({ name, description, id: uuidv1() });
    }
    this.setState({
      name: '',
      description: ''
    });
    this.props.closeEntry();
  }

  render() {
    const { name, description } = this.state;

    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <header>
            <h2>Adicionar</h2>
            <button type="button" onClick={this.props.closeEntry}>
              Voltar
            </button>
            <button type="submit">Salvar</button>
          </header>
          <div>
            <div>
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={this._handleChange}
              />
            </div>
            <div>
              <label htmlFor="description">Descrição:</label>
              <input
                type="text"
                id="description"
                value={description}
                onChange={this._handleChange}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const EntryWindow = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedEntryWindow);

export default EntryWindow;
