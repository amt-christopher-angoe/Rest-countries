import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { AppState } from './reducers';
import {CountriesActionTypes} from './actions'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState, CountriesActionTypes>))
);

export default store;
