import React, { Fragment } from "react";
import "./css/bootstrap.min.css";
import  "./css/fontawesome-all.min.css";
import "./css/swiper.min.css";
import "./css/style.css";

/**
 * This is the page component where we need to include the details about our FOSS club
 */
class NavBar extends React.Component{
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

                                    <ul>
                                        <li><a href="#">HOME</a></li>
                                        <li><a href="#">EVENTS</a></li>
                                        <li><a href="#">CONTACT</a></li>
                                        <li><a href="#">ABOUT</a></li>
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

    hamburgerExpand() {

    }
}

export default NavBar;
