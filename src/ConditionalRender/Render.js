
import React,{ useState } from 'react';
import TodoorgList from '../CIA1/Q3/Todoitem';
import Timer from '../CIA1/Q4/CiaTimer';
function Render(){
    const[state,setState]=useState({isLogged:false});
    return(state.isLogged?<TodoorgList/>:<Timer/>);
}
export default Render;