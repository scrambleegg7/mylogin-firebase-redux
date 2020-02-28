import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';

import { connect } from 'react-redux';
import { compose } from 'redux';


const BoardList = ({projects}) => {

    return (
        <div className="container">
            {projects && projects.map( project => {
            return(
                <div key={project.id}>
                    <tr>
                    <td>
                        <Link to={'/project/' + project.id  }>{project.title}</Link>
                    </td>
                    <td>description</td>
                    <td>author</td>
                    </tr> 
                </div>
            )

        })}
        </div>
    )
    
};

export default BoardList;




