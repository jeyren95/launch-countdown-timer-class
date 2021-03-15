import React from "react";

import Title from "./Title";
import Footer from "./Footer";
import Countdown from "./Countdown";

import "./App.css";


class App extends React.Component {
  state = {
    remainingTime: 14*24*60*60,
  }


  //Start the timer once the component mounts
  componentDidMount() {
    var intervalId = setInterval(this.timer, 1000)
    this.setState({intervalId: intervalId})
  }

  //Define what the timer does
  timer = () => {
    if (this.state.remainingTime > 0) {
      this.setState({remainingTime: this.state.remainingTime - 1})
    } else {
      clearInterval(this.state.intervalId)
    } 
  }

  render() {
    return (
      <div>
        <div className="countdown-timer">
          <Title />
          <div className="row">
            <Countdown label="DAYS" countdown={Math.floor(this.state.remainingTime/(60*60*24))} />
            <Countdown label="HOURS" countdown={Math.floor((this.state.remainingTime/(60*60)) % 24)} />
            <Countdown label="MINUTES" countdown={Math.floor((this.state.remainingTime/60) % 60)} />
            <Countdown label="SECONDS" countdown={Math.floor(this.state.remainingTime % 60)} />
          </div>
        </div>
        <Footer />
      </div>  
    )
  }
}

export default App
