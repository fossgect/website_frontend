import React, { Fragment } from "react";
import "./Home/css/bootstrap.min.css";
import  "./Home/css/fontawesome-all.min.css";
import "./Home/css/swiper.min.css";
import "./Home/css/style.css";

import {Link} from 'react-router-dom'
import * as ReactDOM from "react-dom";

/**
 * This is the page component where we need to include the details about our FOSS club
 */

class NavBar extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
            isHamburgerVisible : true
        };

    }
    render() {
        return (
            <header className="site-header">
                <div className="header-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-10 col-lg-4">
                                <h1 className="site-branding flex">
                                    <a href="#">FOSS Club GEC Thrissur</a>
                                </h1>
                            </div>

                            <div className="col-2 col-lg-8">
                                <nav className="site-navigation">
                                        <div className="hamburger-menu d-lg-none">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <ul ref="nav">
                                            <li><Link to='/'>HOME</Link></li>
                                            <li><Link to='/events'>EVENTS</Link></li>
                                            <li><Link to='/contactus'>CONTACT</Link></li>
                                            <li><Link to='/about'>ABOUT</Link></li>
                                            <li></li>
                                        </ul>
                                </nav>

                            </div>

                        </div>

                    </div>

                </div>
            </header>
        );
    }

}


export default NavBar;
