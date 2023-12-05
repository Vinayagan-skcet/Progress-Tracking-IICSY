import React,{ useState} from 'react'
import Child1 from './Child1'
const Parent1 =() =>{
    const [Msg,setMsg]=useState('')
    const UpdMsg = (newMsg) =>{
        setMsg(newMsg)
    }
    return(
        <div>
        <p>Message from Child:{Msg}</p>
        <Child1 update={UpdMsg} />
        </div>
    );
}

export default Parent1;