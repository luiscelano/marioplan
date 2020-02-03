export const createProject =(project)=>{
    return (dispatch,getState,{getFirestore})=>{
        //MAKE ASYNC CALL TO DATABASE
        const firestore = getFirestore();
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid
        firestore.collection('projects').add({
            ...project,
            authorfirstName:'Luis',
            authorLastName:'Celano',
            authorId:12345,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT',project})
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',err})
        })
    }
};