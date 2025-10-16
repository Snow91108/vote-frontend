import React, { useState, createContext} from "react";
import ComponentB from "./ComponentB.jsx";

export const UserContext=createContext();

function ComponentA() {
    const [user, setUser]= useState("JohnSnow");
    
    const fetchData = async () => {
        console.log("fetching data"+ result)
    };

    return(
        <div className="box">
            <h2>ComponentA</h2>
            <h4>{`hello ${user}`}</h4>
            <UserContext.Provider value={user}>
                <ComponentB fetchData={fetchData}/>
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA;