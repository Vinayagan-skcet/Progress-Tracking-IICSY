import Blog from './Component/Blog'
import MiuiSignup from './Component/MiuiSignup'
import MiuiSign from './Component/MiuiSign'

function func1(){
  if(window.location.pathname === "/Blog"){
    return <Blog/>
  }
}
function func2(){
  if(window.location.pathname === "/MiuiSign"){
    return <MiuiSign/>
  }
}
function func3(){
  if(window.location.pathname === "/"){
    return <MiuiSignup/>
  }
}
function App() {
  return (
    <div>
      {func1()}
      {func2()}
      {func3()}
      </div>
    )
  }
export default App