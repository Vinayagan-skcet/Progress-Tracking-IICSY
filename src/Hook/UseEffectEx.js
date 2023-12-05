import { useEffect , useState } from "react";

function EffectEx(){
    const [count,setCount]=useState(0);
   useEffect(() => {
     const intervalId = setInterval(() => {
       setCount((prevCount) => prevCount + 1);
     }, 1000);

     // Cleanup the interval when the component is unmounted
     return () => clearInterval(intervalId);
   },[]);
    return(
        <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}></button>
        </div>
    );
}
export default EffectEx;