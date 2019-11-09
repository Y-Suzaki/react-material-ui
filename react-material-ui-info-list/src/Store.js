import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import noticeReducer from './reducers/noticeReducer'
import updateReducer from './reducers/updateReducer'
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router'

function createReduxStore(history) {
    //for Redux DevTools
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        combineReducers(
            {
                // Router用の状態もStoreで管理
                router: connectRouter(history),
                // ここの第一引数に設定した「notice」は、stateの属性名になる
                notice: noticeReducer,
                update: updateReducer
            }
        ),
        composeEnhancers(
            applyMiddleware(
                thunk,
                routerMiddleware(history)
            ))
    )
}

export default createReduxStore;
