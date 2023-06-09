import React from "react";

export class CounterProps extends React.Component {
  state = {
    count: this.props.initialValue || 0,
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + (this.props.incrementBy || 1),
        };
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}
