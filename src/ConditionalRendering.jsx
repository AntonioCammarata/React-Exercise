import React from "react";
import { Age } from "./Props-Extract message";

function ConditionalRendering({props}) {
  return (
    <div>
      Hello {props.name}!{props.age > 18 ? <Age age={props.age} /> : null}
    </div>
  );
}

export default ConditionalRendering;
