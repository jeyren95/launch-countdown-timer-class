import React from "react";

import "./Countdown.css";

class Countdown extends React.Component {
    render() {
        return (
            <div className="col-3 countdown">
                <div className="timer">
                    <h1>{this.props.countdown < 10 ? `0${this.props.countdown}` : this.props.countdown}</h1>
                </div>
                <h4>{this.props.label}</h4>
            </div>           
        )
    }
}

export default Countdown