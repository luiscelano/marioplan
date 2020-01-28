import React from 'react'
import {Link} from 'react-router-dom'
const Nabvar = () =>{
    return(
        <div className="nav.nav-wrapper.grey.darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Mario Plan</Link>
            </div>
        </div>
    )
}
export default Nabvar