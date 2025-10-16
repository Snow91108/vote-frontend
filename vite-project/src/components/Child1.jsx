import React from "react";
import Child2 from "./Child2";

function Child1(props) {
  return (
    <div>
      <h3>Child1 Component</h3>
      <Child2 sendMessage={props.sendMessage} />
    </div>
  );
}

export default Child1;