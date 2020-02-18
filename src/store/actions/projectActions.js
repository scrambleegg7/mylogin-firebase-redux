export const createProject = (project) => {

    console.log("createProject from projectActions : ", project)

    return (dispatch , getState, { getFirebase, getFirestore }     ) => {
        // make async 
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorid = getState().firebase.auth.uid;

        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorid,
            createdAt:new Date()
        })
        .then( () => {
            dispatch(
                {
                    type: 'CREATE_PROJECT', 
                    project 
                })
        })
        .catch((err) => {
            dispatch(
                {
                    type: 'CREATE_PROJECT_ERROR', 
                    err
                })

        })

    }

};
