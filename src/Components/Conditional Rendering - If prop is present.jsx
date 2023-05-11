import { Age } from "./age";

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
