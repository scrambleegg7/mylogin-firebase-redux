import React  from 'react'
import { Link } from 'react-router-dom';

import SignedInLInks from './SignedInLinks';
//import SignedOutLInks from './SignedOutLinks';

import  { connect } from 'react-redux'; 

const Navbar= (props) => {

    const { auth, profile } = props;
    console.log("Navbar firebase state props", auth )
    console.log("Navbar firebase firestore profile props", profile )

    //const links = auth.uid && auth.emailVerified) ? <SignedInLInks profile={profile} /> : <SignedOutLInks />
    return (
    <nav className="nav-wrapper grey darken-3">
        <div className="container">

            <Link to="/" className="brand-logo">Navbar</Link>
            <SignedInLInks profile={profile} />
            {/*links*/}
        </div>
    </nav>
    )
}

const mapStateToProps = (state) => {
    //console.log("navbar ",state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);