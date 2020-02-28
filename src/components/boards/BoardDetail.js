import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import { deleteProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';
import moment from 'moment';



class BoardDetail extends Component {


    constructor(props) {
        super(props);
        this.state = {
            id:''
        }
    }

    handleDelete = (e) => {
        e.preventDefault();
        console.log("deleteProject from BoardDetail -> ",this.props.match.params.id);
        this.props.deleteProject( this.props.match.params );
        this.props.history.push('/')
    }
    
    render() {
        const { project, auth } = this.props;

        console.log("props match params",this.props.match.params);
        //const id = props.match.params.id;



        //console.log("project props from BoardDetail",{project});

        if (!auth.uid) return <Redirect to='/signin' />

        if (project) {
            return (
                
                <div className="container section project-details">

                    <h2>Board Detail Screen</h2>
                    <hr />
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">Project title - { project.title }</span>
                            <p> { project.content } </p>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div>Posted by {project.authorFirstName } {project.authorLastName }  </div>
                            <div> { moment(  project.createdAt.toDate().toISOString() ).format("YYYY-MMM-DD")  }  </div>
                        </div>
                    </div>
                    <Link className="btn btn-success"  to={'/edit/' + project.id }  >Edit</Link>
                    <button onClick={this.handleDelete} >Delete</button>
                </div>
            )
        }
        else {
            return (
                <div className="container center">
                    loading.....
                </div>
            )
        }

    }
}

const mapStateToProps = (state, ownProps) => {
    //console.log("state / mapStateProps of BoardDetail ",state)

    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;

    return {
        project: project,
        auth: state.firebase.auth
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        deleteProject: (project => dispatch(deleteProject(project)))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(BoardDetail);

