import Sum from "./Sum";

function Add() {
const [sum, setSum]= useState(0);

  return(
    <div>
      <button onClick={() => setSum((sum) => sum + 1)}>
          sum is {sum}
        </button>
    </div>
  )
 }

 export default Add;