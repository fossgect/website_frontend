import React, { Fragment } from "react";
import "./css/normalize.css";
import "./css/demo.css";
import "./css/component.css";
// import "./js/classie";
// import "./js/modernizr.custom.25376";
// import "./js/menu";

class NavBar extends React.Component{
    render() {
        return (
            <div id="perspective" className="perspective effect-moveleft">
                <div className="container">
                    <div className="wrapper">
                        <div className="codrops-top clearfix">
                            <a className="codrops-icon codrops-icon-prev"
                               href="http://tympanus.net/Development/ProgressButtonStyles/"><span>Previous Demo</span></a>
                            <span className="right"><a className="codrops-icon codrops-icon-drop"
                                                       href="http://tympanus.net/codrops/?p=17915"><span>Back to the Codrops Article</span></a></span>
                        </div>
                        <header className="codrops-header">
                            <h1>Perspective Page View Navigation <span>Transforms the page in 3D to reveal a menu</span>
                            </h1>
                        </header>
                        <div className="main clearfix">
                            <div className="column">
                                <p>
                                    <button id="showMenu">Show Menu</button>
                                </p>
                                <p>Click on this button to see the content being pushed away in 3D to reveal a
                                    navigation or other items.</p>
                            </div>
                            <div className="column">
                                <nav className="codrops-demos">
                                    <a href="index.html">Airbnb Effect</a>
                                    <a href="index2.html" className="current-demo">Move Left</a>
                                    <a href="index3.html">Rotate Left</a>
                                    <a href="index4.html">Move Down</a>
                                    <a href="index5.html">Rotate Top</a>
                                    <a href="index6.html">Lay Down</a>
                                </nav>
                            </div>
                            <div className="related">
                                <p>If you enjoyed this demo you might also like:</p>
                                <p><a href="http://tympanus.net/Tutorials/AnimatedBorderMenus/">Animated Border
                                    Menus</a></p>
                                <p><a href="http://tympanus.net/Development/SidebarTransitions/">Transitions for
                                    Off-Canvas Navigations</a></p>
                            </div>
                        </div>

                    </div>

                </div>

                <nav className="outer-nav right vertical">
                    <a href="#" className="icon-home">Home</a>
                    <a href="#" className="icon-news">News</a>
                    <a href="#" className="icon-image">Images</a>
                    <a href="#" className="icon-upload">Uploads</a>
                    <a href="#" className="icon-star">Favorites</a>
                    <a href="#" className="icon-mail">Messages</a>
                    <a href="#" className="icon-lock">Security</a>
                </nav>
            </div>
        );
    }
}

export default NavBar;