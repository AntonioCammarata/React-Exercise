import React from "react";

export class Sum extends React.Component {
  render() {
    return <h2>The sum is {this.props.number1 + this.props.number2}</h2>;
  }
}
