import React from 'react';

// function Child2({user}) {
    
//     return<h2>Child2 :{user.name} </h2>
// }
function Child2(props) {
    return(
        <button onClick={()=> props.sendMsg("hello")}>send msg</button>
    )
}

export default Child2;