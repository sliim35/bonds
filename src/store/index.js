import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';

const middlewares = [thunk];

export const createStoreWithPreloadedData = (data) =>
    createStore(
        rootReducer,
        data,
        composeWithDevTools(applyMiddleware(...middlewares))
    );
