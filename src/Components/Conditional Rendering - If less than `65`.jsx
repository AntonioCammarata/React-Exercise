import React from "react";
import { Age } from "./age";

function ConditionalRenderingLess({ props }) {
  return (
    <div>
      Hello {props.name}!
      {props.age > 18 && props.age < 68 ? <Age age={props.age} /> : null}
    </div>
  );
}

export default ConditionalRenderingLess;
