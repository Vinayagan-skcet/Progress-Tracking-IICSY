import { createContext, useContext, useState } from "react";
const UserContext = createContext();

function Usecontext() {
  const [user, setUser] = useState("Jesse Hall");
  return (
    <UserContext.Provider value={user}>
      <Component2 />
    </UserContext.Provider>
  );
}
function Component2() {
    const user=useContext(UserContext);
  return (
      <div>
      <h1>{`Hello ${user} from Componenet2`}</h1>
      <Component3 />;
      </div>
      )
}
function Component3() {
  return <Component4 />;
}
function Component4() {
  return <Component5 />;
}
function Component5() {
  const user = useContext(UserContext);
  return <h2>{`Hello ${user} from component 5`}</h2>;
}

export default Usecontext;
