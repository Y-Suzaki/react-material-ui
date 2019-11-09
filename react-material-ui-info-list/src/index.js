import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createReduxStore from './Store'
import {Provider} from 'react-redux';
import { createBrowserHistory } from "history"
import { ConnectedRouter } from 'connected-react-router'
import {Switch, Router} from "react-router-dom";

const history = createBrowserHistory();
const store = createReduxStore(history)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
