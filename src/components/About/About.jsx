import React, { Component } from "react";

class About extends Component {
  state = {
    isEmailVisible: false,
  };
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Raven Mirabeau</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>

        {this.getEmailText()}

        <hr className="my-4"></hr>

        <button
          onClick={this.handleBtnClick}
          className="btn btn-primary btn-lg"
        >
          Show Email
        </button>
      </div>

      //Add contact Information
    );
  }
  handleBtnClick = () => {
    this.setState({ isEmailVisible: true });
    //timer to hide email address

    setTimeout(() => {
      this.setState({ isEmailVisible: false });
    }, 10000);
  };

  getEmailText = () => {
    if (this.state.isEmailVisible) {
      return <a href="mailto:ramirabeau@gmail.com">ramirabeau@gmail.com</a>;
    } else {
      return <h6>Click on the button to see the email address</h6>;
    }
  };
}

export default About;

/*
1) CATCH CLICK EVENT on the btn and update the state

2) in getEmailText verify if the state flag is true, return email otherwise return the message.
*/
