import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
const Nabvar = () =>{
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Mario Plan</Link>
            </div>
        </nav>
    )
}
export default Nabvar