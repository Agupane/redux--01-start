const initialState = {
    counter: 0
};

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case 'INCREMENT':{
            return {
                ...initialState,
                counter: state.counter+1
            }
        }
        case 'DECREMENT':{
            return {
                ...initialState,
                counter: state.counter-1
            }
        }
        case 'ADD':{
            return {
                ...initialState,
                counter: state.counter+action.value
            }
        }
        case 'SUBTRACT':{
            return {
                ...initialState,
                counter: state.counter-action.value
            }
        }
        default:{
            return initialState;
        }
    }
};
export default reducer;