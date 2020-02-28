import React, { Component } from 'react';

import { connect } from 'react-redux';
import { editProject } from '../../store/actions/projectActions';

import { Redirect } from 'react-router-dom';


class EditBoard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            key: '',
            title: '',
            content: ''    
        }

    }

    componentDidMount() {
        console.log("EditBoard componentDidMount.", this.props)
        const { project, auth } = this.props;

        this.setState( { key: this.props.match.params.id })
        this.setState( 
            {
                content: project.content, 
                title: project.title
            }
        )
         
    }


    handleChange = (e) => {
        this.setState(
            {
                [e.target.id]: e.target.value
            }
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("EditProject component -> ",this.state);
        this.props.editProject(this.state);
        this.props.history.push('/')
    }

    render() {

        const { project, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />

        console.log("EditBoard render")

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Edit Board data</h5>
                    <div className="input-field">
                        <label htmlFor="title">タイトル</label>
                        <input type="text" id="title" onChange={this.handleChange} value={this.state.title}   />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">内容</label>
                        <textarea className="materialize-textarea" id="content" onChange={this.handleChange} value={this.state.content} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Edit</button>
                    </div>
                </form>
            </div>
        )
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
        editProject: (project => dispatch(editProject(project)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBoard);
