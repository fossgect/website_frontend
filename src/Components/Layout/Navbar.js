import React from 'react'
import { Link } from 'react-router-dom' 

const Navbar = () => {


    return (
        <ul>
            <Link to = '/'><li>Home</li></Link>
            <Link to = '/about'><li>About</li></Link>
            <Link to = '/events'><li>Events</li></Link>
            <Link to = 'contactus'><li>Contact us</li></Link>
        </ul>
    )
}

export default Navbar