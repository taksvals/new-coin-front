import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = configureStore({
    reducer: rootReducer, 
    devTools: composeWithDevTools(applyMiddleware(...middleware)),
    preloadedState: initialState});

export default store;