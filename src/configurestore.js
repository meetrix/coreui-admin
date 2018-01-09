import { createStore,applyMiddleware } from 'redux';
import rootReducer from  './reducers';
import 'regenerator-runtime/runtime'
import createSagaMiddleware from 'redux-saga';
import dataSaga from './actions/saga'
import { createLogger } from 'redux-logger'


const sagaMiddleware = createSagaMiddleware()
export default(initialState) => {
    const store = createStore(rootReducer, initialState,applyMiddleware(sagaMiddleware,createLogger()))
    sagaMiddleware.run(dataSaga);
    return store;
}