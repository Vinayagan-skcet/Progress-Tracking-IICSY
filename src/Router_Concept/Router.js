import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MiuiSignin from './MiuiSignin';
import MiuiSignup from './MiuiSignup';
import Blog from './Blog';
const Navigate = () =>{
    return(
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<MiuiSignup/>}/>
             <Route path="/MiuiSignup" element={<MiuiSignup/>}/>
              <Route path="/MiuiSignin" element={<MiuiSignin/>}/>
              <Route path="/Blog" element={<Blog/>}/>
          </Routes>
        </BrowserRouter>
    )
} 
export default Navigate;