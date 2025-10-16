import React from 'react';
// function Child3({user}) {
    
//     return <h2>{user.name}, age is {user.age}</h2>
// }
function Child3(props) {
    return(
        <h2> props.sendMsg("hello") </h2>
    )
}
export default Child3;