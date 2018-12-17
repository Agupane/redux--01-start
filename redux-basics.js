const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
  counter: 0
};


// Reducer
const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'INC_COUNTER':{
            return {
                ...initialState,
                counter: state.counter + 1
            }
        }
        case 'ADD_COUNTER':{
            return{
                ...initialState,
                counter: state.counter + action.value
            }
        }
        default:{
            return initialState;
        }
    }
};


// Store
const store = createStore(rootReducer);

console.log(store.getState());

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({
    type: 'ADD_COUNTER',
    value: 10
});

console.log(store.getState());
// Subscription