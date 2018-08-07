import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openEntry } from '../actions';
import ListItens from './ListItens';

const mapDispatchToProps = dispatch => {
  return {
    openEntry: id => dispatch(openEntry(id))
  };
};

class ConnectedList extends Component {
  render() {
    return (
      <div>
        <header>
          <h2>Situações do documento</h2>
          <form>
            <input type="text" />
            <button type="submit">Pesquisar</button>
          </form>
        </header>
        <div>
          <ListItens />
        </div>
        <button>Carregar mais... (2 - 10)</button>
        <button onClick={() => this.props.openEntry(false)}>
          Novo registro
        </button>
      </div>
    );
  }
}

const List = connect(
  null,
  mapDispatchToProps
)(ConnectedList);

export default List;
