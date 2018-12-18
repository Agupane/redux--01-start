import * as actionTypes from './actionTypes';


export const saveResult = (res) =>{
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
};

export const storeResult = (res) =>{
    return (dispatch, getState) => {
        setTimeout(() => {
            console.log("Reaching to a server to store result");
            dispatch(saveResult(res));
        }, 2000);
    };
};


export const deleteResult = (resId) =>{
    return {
        type: actionTypes.DELETE_RESULT,
        resultId: resId
    };
};