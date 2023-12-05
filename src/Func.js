function Func() {
  return <Greeting name="how are you" age="30" />;
}

function Greeting(props) {
  return <h1> Hi {props.name} you are age is {props.age}</h1>;
}
export default Func;