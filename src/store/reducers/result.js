import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utility";

const initialState = {
    results: []
};

const deleteResult = (state,action)=>{
    const updatedArray = state.results.filter(result => result.id !== action.resultId); // Instead of slice, concat filters generates a new array
    return updateObject(state, {
        results: updatedArray
    });
};

const resultReducer = (state = initialState,action) =>{
    switch(action.type){
        case actionTypes.STORE_RESULT:{
            return updateObject(state, {
                results: state.results.concat({id: new Date(), value: action.value}) // Instead of push, concat returns a new array
            });
        }
        case actionTypes.DELETE_RESULT:{
            return deleteResult(state, action);
        }
        default:{
            return state;
        }
    }
};
export default resultReducer;

