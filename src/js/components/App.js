import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import List from './List';
import EntryWindow from './EntryWindow';
import '../../scss/base.scss';

const mapStateToProps = state => {
  return { entryWindow: state.entryWindow };
};

class ConnectedApp extends Component {
  _getEntryWindow() {
    if (this.props.entryWindow.status) return <EntryWindow />;
  }

  render() {
    return (
      <Fragment>
        <header>
          <h1>Agrotis</h1>
        </header>
        <main>
          <List />
          {this._getEntryWindow()}
        </main>
        <div>
          Situação salva com sucesso <button>Fechar</button>
        </div>
      </Fragment>
    );
  }
}

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
