import {
  UPDATE_ACTIVE_PAGE,
  TOGGLE_MENU,
  HIDE_MAIN_COMPONENT,
  GET_NEXT_SLIDE,
  GET_PREVIOUS_SLIDE
} from '../constants/action-types';

export const updateActivePage = newActivePage => ({
  type: UPDATE_ACTIVE_PAGE,
  payload: newActivePage
});

export const toggleMenu = () => ({
  type: TOGGLE_MENU
});

export const hideMainComponent = bool => ({
  type: HIDE_MAIN_COMPONENT,
  payload: bool
});

export const getNextSlide = () => ({
  type: GET_NEXT_SLIDE
});

export const getPreviousSlide = () => ({
  type: GET_PREVIOUS_SLIDE
});
