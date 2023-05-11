import React from "react";

export class Young extends React.Component {
  render() {
    return (
      <p>
        Your age is {this.props.age >= 18 ?  this.props.age : <h1>You are very young</h1>}
      </p>
    );
  }
}
