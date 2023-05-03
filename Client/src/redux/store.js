import { createStore, applyMiddleware } from "redux";//nos traemops create store de redux que nos permitira crear nuestro store
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import reducer from '../redux/reducer'

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;