import React from "react";
import Child3 from "./Child3";

function Child2(props) {
  return (
    <div>
      <h3>Child2 Component</h3>
      <Child3 sendMessage={props.sendMessage} />
    </div>
  );
}

export default Child2;
