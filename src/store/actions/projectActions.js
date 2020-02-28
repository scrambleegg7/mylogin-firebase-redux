export const editProject = (project) => {

    console.log("deleteProject from projectActions : ", project.key)

    return (dispatch , getState,  getFirebase     ) => {
        // make async 
        // const firestore = getFirestore();
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        const authorid = getState().firebase.auth.uid;

        firestore.collection('projects').doc(project.key).set(
            {
                title:project.title,
                content:project.content
            }
        )
        .then( () => {
            console.log("Board successfully edited."); 
            dispatch(
                {
                    type: 'EDIT_PROJECT',
                    project
                }
            )
        })
        .catch( (err) => {
            dispatch( 
                {
                    type: 'EDIT_PROJECT_ERROR',
                    err
                }
            )
        })

    }


}






export const deleteProject = (project) => {

    console.log("deleteProject from projectActions : ", project.id)

    return (dispatch , getState,  getFirebase     ) => {
        // make async 
        // const firestore = getFirestore();
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        const authorid = getState().firebase.auth.uid;


        firestore.collection('projects').doc(project.id).delete()
        .then( () => {
            console.log("Board successfully deleted."); 
            dispatch(
                {
                    type: 'DELETE_PROJECT',
                    project
                }
            )
        })
        .catch( (err) => {
            dispatch( 
                {
                    type: 'DELETE_PROJECT_ERROR',
                    err
                }
            )
        })

    }


}


export const createProject = (project) => {

    console.log("createProject from projectActions : ", project)

    return (dispatch , getState,  getFirebase     ) => {
        // make async 
        // const firestore = getFirestore();
        const firestore = getFirebase().firestore();
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
