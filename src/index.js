import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStoreWithPreloadedData } from './store';

import { data } from './data';

import { App } from './components/app';

const store = createStoreWithPreloadedData({ chartData: data });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
