import React from "react";

import "./Footer.css";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">   
                <div className="icons">
                    <i className="fab fa-facebook-square fa-2x"></i>
                    <i className="fab fa-pinterest fa-2x"></i>
                    <i className="fab fa-instagram fa-2x"></i>
                </div> 
            </div>
        )
    }

}

export default Footer