import {
  OPEN_ENTRY_WINDOW,
  CLOSE_ENTRY_WINDOW,
  ADD_ENTRY,
  EDIT_ENTRY
} from '../constants/action-types';

const initialState = {
  entries: [],
  entryWindow: {
    status: false,
    id: false
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_ENTRY_WINDOW:
      return {
        ...state,
        entryWindow: { status: true, id: action.payload }
      };
    case CLOSE_ENTRY_WINDOW:
      return {
        ...state,
        entryWindow: { status: false, id: false }
      };
    case ADD_ENTRY:
      return {
        ...state,
        entries: [...state.entries, action.payload]
      };
    case EDIT_ENTRY:
      const entryToEdit = state.entries.filter(
        entry => entry.id === action.payload.id
      )[0];
      const newEntries = state.entries.slice();
      const { name, description, id } = action.payload;
      newEntries[newEntries.indexOf(entryToEdit)] = {
        name,
        description,
        id
      };
      return {
        ...state,
        entries: newEntries
      };
    default:
      return state;
  }
};

export default rootReducer;
