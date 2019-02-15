import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from '../_reducers'
import { reducer} from '../_reducers/SignInReducer.js'

const initialState = {};

//const middleWare = [thunk, ];

const store  = createStore(
    reducer, 
    initialState, 
    compose(
        applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    
);

export default store;