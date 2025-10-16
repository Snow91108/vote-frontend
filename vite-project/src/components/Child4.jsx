import React from "react";

function Child4(props) {
  const message = "Hello from Child4";

  return (
    <div>
      <h3>Child4 Component</h3>
      <button onClick={() => props.sendMessage(message)}>
        Send Message to Parent
      </button>
    </div>
  );
}

export default Child4;
