import React, { useState } from "react";
import ComponentB from "./ComponentB.jsx";
function ComponentA() {
    const [user, setUser]= useState("JohnSnow")

    return(
        <div className="box">
            <h2>ComponentA</h2>
            <h4>{`hello ${user}`}</h4>
            <ComponentB user={user}/>
        </div>
    )
}

export default ComponentA;