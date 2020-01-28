export const createProject =(project)=>{
    return (dispatch,getState)=>{
        //MAKE ASYNC CALL TO DATABASE
        dispatch({
            type:'CREATE_PROJECT',project})
    }
};