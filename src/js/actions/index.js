import {
  OPEN_ENTRY_WINDOW,
  CLOSE_ENTRY_WINDOW,
  ADD_ENTRY,
  EDIT_ENTRY
} from '../constants/action-types';

export const openEntry = id => ({
  type: OPEN_ENTRY_WINDOW,
  payload: id
});

export const closeEntry = () => ({
  type: CLOSE_ENTRY_WINDOW
});

export const addEntry = entry => ({
  type: ADD_ENTRY,
  payload: entry
});

export const editEntry = entry => ({
  type: EDIT_ENTRY,
  payload: entry
});
