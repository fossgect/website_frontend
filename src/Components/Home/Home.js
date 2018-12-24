import React, { Fragment } from "react";
import NavBar from "./Navbar";

/**
 * This is the page component where we need to include the details about our FOSS club
 */

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    };
    this.countdown = this.countdown.bind(this);
  }

  componentDidMount() {
    setInterval(this.countdown, 1000);
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="hero-content">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-12">
                <div className="entry-header">
                  <h2>
                    The BigDay
                    <br /> <small>19.1.2018 </small>
                  </h2>
                </div>

                <br />

                <div className="countdown flex flex-wrap justify-content-between">
                  <div className="countdown-holder">
                    <div className="dday"> {this.state.countdown.days} </div>
                    <label>Days</label>
                  </div>

                  <div className="countdown-holder">
                    <div className="dhour"> {this.state.countdown.hours} </div>
                    <label>Hours</label>
                  </div>

                  <div className="countdown-holder">
                    <div className="dmin"> {this.state.countdown.minutes} </div>
                    <label>Minutes</label>
                  </div>

                  <div className="countdown-holder">
                    <div className="dsec"> {this.state.countdown.seconds} </div>
                    <label>Seconds</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 ">
                <div className="entry-footer">
                  <a href="#" className="btn">
                    {" "}
                    Buy Tickets{" "}
                  </a>
                  <a href="#" className="btn current">
                    See Lineup
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  countdown() {
    const event_date = new Date("2019-01-19");
    const current_date = new Date();

    let diff = (event_date - current_date) / 1000;

    const days = parseInt(diff / 86400);
    diff -= days * 86400;
    const hours = parseInt(diff / 3600);
    diff -= hours * 3600;
    const minutes = parseInt(diff / 60);
    diff -= minutes * 60;
    const seconds = parseInt(diff);

    this.setState({
      countdown: {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      }
    });
  }
}

export default Home;
