import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk  from 'redux-thunk';
import { Provider }  from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducer = combineReducers({
   ctr: counterReducer,
   res: resultReducer
});

/** Middleware for execute async functions **/
const logger = store=>{
  return next =>{
      return action => {
          console.log("[Middleware] Dispatching", action);
          const result = next(action);
          console.log("[Middleware] next state ", store.getState());
          return result;
      }
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
