import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'
const Nabvar = (props) =>{
    const {auth} = props
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Mario Plan</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    )
}
const mapStateToProps =(state)=>{
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(Nabvar)