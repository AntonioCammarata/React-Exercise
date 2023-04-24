import React from "react";

export class WelcomeAge extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome{this.props.name}</h1>
        <p>Your age is{this.props.age}</p>
      </div>
    );
  }
}
