import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';

import { connect } from 'react-redux';
import { compose } from 'redux';
import BoardList from './BoardList';

class BoardPanel extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const {projects, auth} = this.props;
        console.log("BoardPanel prop of projects.",  projects )
        return (
            <div>
                <h1>BoardPanel</h1>
                <Link to="/create">Add Board</Link>
                <table className="table table-stripe">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                    {projects && projects.map( project => 
                    
                    <tr>
                    <td>
                        <Link to={'/project/' + project.id  }>{project.title}</Link>
                    </td>
                    <td>{project.content.substring(0,30)}</td>
                    <td>{project.authorFirstName} {project.authorLastName}</td>
                    </tr> 
                    )}



                    </tbody>
                </table>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    //console.log("mapStateToProps: boardlist:",state)

    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default  compose(
        connect(mapStateToProps),
        firestoreConnect([
        { collection : 'projects'}
    ])
    )(BoardPanel);



