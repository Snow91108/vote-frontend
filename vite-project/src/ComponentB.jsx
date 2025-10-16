import ComponentC from "./ComponentC.jsx";
function ComponentB(pros) {
    return(
        <div className="box">
            <h2>ComponentB</h2>
            <ComponentC user={pros.user}/>
        </div>
    )
}

export default ComponentB;