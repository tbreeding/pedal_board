import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './root-saga'
import rootReducer from './root-reducer'

const sagaMiddleware = createSagaMiddleware([rootSaga])

const makeStore = (initialState) => {
    const store =  createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    )

    sagaMiddleware.run(rootSaga)

    return store
}

export default makeStore