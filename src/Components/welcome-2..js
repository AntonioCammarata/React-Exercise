import React from "react";
import { Age } from "./age";

export class WelcomeAge extends React.Component {
  render() {
    return (
      <div>
        <p>
          Welcome{this.props.name}! <Age age={this.props.age} />
        </p>
      </div>
    );
  }
}
