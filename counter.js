import React,{useState} from "react";
function Counter(){
const[count, setCount]=useState(0);

increMent=()=>{
    setCount(count+1);
};
return(
    <div>
        <p>Count</p>
        <button onClick={increaMent}>Increment</button>
    </div>
);
};
export default Counter;