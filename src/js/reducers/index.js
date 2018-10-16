import {
  UPDATE_ACTIVE_PAGE,
  TOGGLE_MENU,
  HIDE_MAIN_COMPONENT,
  GET_NEXT_SLIDE,
  GET_PREVIOUS_SLIDE
} from '../constants/action-types';

import slides from '../constants/slides';

const initialState = {
  activePage: '',
  isMenuOpen: false,
  hideMainComponent: false,
  activeSlideIndex: 0,
  activeSlide: slides[0]
};

const lastSlideIndex = slides.length - 1;

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload
      };
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: state.isMenuOpen ? false : true
      };
    case HIDE_MAIN_COMPONENT:
      return {
        ...state,
        hideMainComponent: action.payload
      };
    case GET_NEXT_SLIDE:
      if (state.activeSlideIndex < lastSlideIndex) {
        const newActiveSlideIndex = state.activeSlideIndex + 1;
        return {
          ...state,
          activeSlideIndex: newActiveSlideIndex,
          activeSlide: slides[newActiveSlideIndex]
        };
      }
      return {
        ...state,
        activeSlideIndex: 0,
        activeSlide: slides[0]
      };
    case GET_PREVIOUS_SLIDE:
      if (state.activeSlideIndex > 0) {
        const newActiveSlideIndex = state.activeSlideIndex - 1;
        return {
          ...state,
          activeSlideIndex: newActiveSlideIndex,
          activeSlide: slides[newActiveSlideIndex]
        };
      }
      return {
        ...state,
        activeSlideIndex: lastSlideIndex,
        activeSlide: slides[lastSlideIndex]
      };
    // case ADD_ENTRY:
    //   return {
    //     ...state,
    //     entries: [...state.entries, action.payload]
    //   };
    default:
      return state;
  }
};

export default rootReducer;
