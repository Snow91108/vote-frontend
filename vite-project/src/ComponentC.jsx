import React, { useContext } from "react";
import { UserContext } from "./ComponentA";
import ComponentD from "./ComponentD.jsx";
function ComponentC() {

    const user=useContext(UserContext);
    return(
        <div className="box">
            <h2>ComponentC</h2>
            <h4>{`hello again ${user}`}</h4>
            <ComponentD />
        </div>
    )
}

export default ComponentC;