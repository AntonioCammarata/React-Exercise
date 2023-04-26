import { Age } from "./Props-Extract message";

function ConditionalRenderingIf( {props} ) {
  return (
    <>
      <p>
      Welcome{props.name}!{props.age && <Age age={props.age} />}
      </p>
    </>
  );
}

export default ConditionalRenderingIf;
