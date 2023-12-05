import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Counter from './Hooks1';
import reportWebVitals from "./reportWebVitals";
import Demo from "./Demo";
import Lifecycle from "./Component2/Lifecycle";
// import Timer from "./Component2/Timer";
import Parent1 from './CIA1/Q1/Parent1'
import App from './CIA1/Q2/Valid2'
import Hoc from './Hoc';
import Validation from "./FormValid";
import TodoorgList from "./CIA1/Q3/Todoitem";
 import Timer from "./CIA1/Q4/CiaTimer";
 import StyledComponent from "./CIA1/Q5/StyledComponenet";
import DaysForm from "./CIA1/Q6/DaysForm";
import StateEx from './Hook/UseStateEx'
import EffectEx from "./Hook/UseEffectEx";
import Render from './ConditionalRender/Render'
import Usecontext from './Hook/UseContext'
import Blog from './AppDemo/Blog'
import Router from './AppDemo/Router'
import Parent from './UnknProp/Parent'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Parent val1={'hi'} val2={'how'} val3={'are'} val4={'you'} val5={'sgacva'}/>
  </React.StrictMode>
  );
  // <Router/>
  // <MiuiSignup/>
  
  // <MiuiSignin/>
  // <Usecontext/>
  // <Render/>
  // <StateEx/>
  // <EffectEx/>
  
  // <StyledComponent/>
  // <Timer/>
  // <TodoorgList/>
  // <Hoc/>
  // <App/>
  //  <App/>
  // <Parent1/>
  // <Timer/>
  // <Lifecycle/>
  // <Counter/>
  // <Blog/>
// <MiuiSignup/>
// <Demo/>
// <Miui/>
// <Parent/>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
