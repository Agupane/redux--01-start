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
        default:{
            return initialState;
        }
    }
};
export default reducer;