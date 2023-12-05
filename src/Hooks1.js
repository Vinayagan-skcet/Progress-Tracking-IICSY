import React,{ useState } from 'react';
const Counter = () => {
    const  [count,sCt]= useState(0);
    const  [num,setnum]= useState(0);
  return (
    <div>
     <p>Count: {count} {num}</p>
     <button onClick={()=>sCt(count+1)}>Increment</button>
     <button onClick={()=>setnum(num+1)}>Decrement</button>
    </div>
  );
};
export default Counter