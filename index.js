import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime';

import store from './src/app/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
