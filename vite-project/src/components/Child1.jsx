import React from 'react';
// import Child2 from "./Child2";
// import Child3 from "./Child3";
// import Child4 from "./Child4";
// import Child4 from "./Child4";
// function Child1({Greeting}) {
//     // return<h2>Child1:{user.name} </h2>,
//     return(
//         <div>
//             <Child4 Greeting={Greeting} />
//         </div>
//     )
    
// }
// export default Child1;

function Child1() {
    const handleMsg=(msg)=>{
        alert("msg from child" +msg)
    }
     return <child2 sendMsg={handleMsg} />
   
}
export default Child1;