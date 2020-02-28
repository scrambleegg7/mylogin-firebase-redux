import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

import { Redirect } from 'react-router-dom';


class CreateBoard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: ''    
        }

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
        console.log("CreateProject component -> ",this.state);
        this.props.createProject(this.state);
        this.props.history.push('/')
    }

    render() {

        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Board</h5>
                    <div className="input-field">
                        <label htmlFor="title">タイトル</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">内容</label>
                        <textarea className="materialize-textarea" id="content" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
       }

}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project => dispatch(createProject(project)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoard);
