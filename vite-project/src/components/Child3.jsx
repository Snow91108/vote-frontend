import React from "react";
import Child4 from "./Child4";

function Child3(props) {
  return (
    <div>
      <h3>Child3 Component</h3>
      <Child4 sendMessage={props.sendMessage} />
    </div>
  );
}

export default Child3;
