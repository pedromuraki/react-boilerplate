import React from 'react';
import { connect } from 'react-redux';
import { openEntry } from '../actions';

const mapStateToProps = state => {
  return { entries: state.entries, entryWindow: state.entryWindow };
};

const mapDispatchToProps = dispatch => {
  return {
    openEntry: id => dispatch(openEntry(id))
  };
};

const ConnectedListItens = props => {
  return (
    <ul>
      {props.entries.map((entry, i) => {
        return (
          <li key={i} onClick={() => props.openEntry(entry.id)}>
            <div>Nome: {entry.name}</div>
            <div>Descrição: {entry.description}</div>
          </li>
        );
      })}
    </ul>
  );
};

const ListItens = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedListItens);

export default ListItens;
