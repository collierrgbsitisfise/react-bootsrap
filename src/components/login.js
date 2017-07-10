import React, { Component } from 'react';

import './../styles/login/login.style.css';

class LoginComponent extends Component {
    render() {
        return (
            <div id="loginContainer">
                <div className="row">
                    <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12">
                               Some info about login form
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent;

            // <div className="container" id="loginContainer">
            //     <div id="loginForm">
            //         <div className="row">
            //             <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12">
            //                 Some info about login form
            //             </div>
            //         </div>
            //     </div>
            // </div>