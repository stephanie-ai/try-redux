import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import catReducer from './reducers/catReducer';

const store = createStore(catReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;