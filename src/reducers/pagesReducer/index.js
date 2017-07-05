import types from 'actions/types';
import loginPage from './loginPage';
import signupPage from './signupPage';
const {
  REMOVE_SELECTED_GENRE,
  GET_DJ,
  FILTER_SEARCH_SUCCESS,
  LOGIN_PAGE_FORM_CHANGE,
  SIGNUP_PAGE_FORM_CHANGE,
  SIGN_IN_FAIL,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  GET_ARTISTS_SUCCESS,
} = types;

const INITIAL_STATE = {
  artistsPage: {
    selectedGenres: [],
    selectedPrice: '0',
    selectedDate: Date.now(),
    results: [],
  },
  loginPage: {
    form: {
      email: '',
      password: '',
      errors: null,
    },
  },
  signupPage: {
    form: {
      email: '',
      password: '',
      role: 0,
      errors: null,
    },
    loading: false,
    success: false,
  },
};

export default function pagesReducer(state = INITIAL_STATE, action) {
  if (action.type === '@@redux-form/CHANGE') {
    switch (action.meta.field) {
      case 'genre':
        return Object.assign({}, state, {
          artistsPage: Object.assign({}, state.artistsPage, {
            selectedGenres: state.artistsPage.selectedGenres
              .filter(el => el !== action.payload.toString())
              .concat(action.payload),
          }),
        });

      default:
        return state;
    }
  }

  if (action.type === GET_ARTISTS_SUCCESS) {
    return Object.assign({}, state, {
      artistsPage: Object.assign({}, state.artistsPage, {
        results: action.data.result,
      }),
    });
  }

  if (action.type === REMOVE_SELECTED_GENRE) {
    return Object.assign({}, state, {
      artistsPage: Object.assign({}, state.artistsPage, {
        selectedGenres: state.artistsPage.selectedGenres.filter(
          el => el !== action.payload.toString()
        ),
      }),
    });
  }

  if (action.type === GET_DJ) {
    return Object.assign({}, state, {
      artistID: action.payload,
    });
  }

  if (action.type === LOGIN_PAGE_FORM_CHANGE || action.type === SIGN_IN_FAIL) {
    return {
      ...state,
      loginPage: loginPage(state.loginPage, action),
    };
  }

  if (
    action.type === SIGNUP_PAGE_FORM_CHANGE ||
    action.type === SIGN_UP_FAIL ||
    action.type === SIGN_UP ||
    action.type === SIGN_UP_SUCCESS
  ) {
    return {
      ...state,
      signupPage: signupPage(state.signupPage, action),
    };
  }

  return state;
}