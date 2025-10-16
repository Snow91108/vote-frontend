import React from 'react';
import Child1 from './components/Child1';

function Parent() {
 
  const handleMessage = (message) => {
    alert("Received in Parent: " + message);
  };

  return (
    <div>
      <h2>App (Parent) Component</h2>
      <Child1 sendMessage={handleMessage} />
    </div>
  );
}

export default Parent;