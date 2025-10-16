import React, { useState, useContext } from "react";
import { UserContext } from "./ComponentA";
function ComponentD() {
const user=useContext(UserContext);

const [data, setData]= useState(null);


    const fetchData= async () => {
        try {
            const response= await fetch("https://jsonplaceholder.typicode.com/users");
            const data= await response.json();
            console.log("Fetched in ComponentA:", data)
        } catch (error) {
           console.log("error :", error) 
        }
    }

    return(
        <div className="box">
            <h2>ComponentD</h2>
            {/* <h3>{`Bye ${user}`}</h3> */}
            <button onClick={fetchData}> Click for Data</button>
            
        </div>
    )
}

export default ComponentD;