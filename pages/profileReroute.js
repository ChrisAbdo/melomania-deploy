import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>hi{this.props.account}</h1>
      </div>
    );
  }
}

export default Profile;
