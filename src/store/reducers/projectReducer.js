
const InitState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
      ]    
}

const projectReducer = (state = InitState, action ) => {

    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log("create_proeject from projectReducer ", action.project  )
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log("create_proeject_error from projectReducer ", action.err  )
            return state;
        case 'DELETE_PROJECT':
            console.log("delete_proeject from projectReducer ", action.project  )
            return state;
        case 'DELETE_PROJECT_ERROR':
            console.log("delete_proeject_error from projectReducer ", action.err  )
            return state;
        case 'EDIT_PROJECT':
            console.log("edit_proeject from projectReducer ", action.project  )
            return state;
        case 'EDIT_PROJECT_ERROR':
            console.log("edit_proeject_error from projectReducer ", action.err  )
            return state;
    
            
        default:
            return state;   
    }
}


export default projectReducer;