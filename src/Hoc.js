
import React,{ Component } from 'react';
const withLogger = (WrappedComponent) => {
    return class extends Component{
    componentDidMount(){
        console.log(`Component ${WrappedComponent.name} is mounted`);
    }

   render(){
    return <WrappedComponent {...this.props}/>
   }
   };
};
const MyComponent = () =>{
    return <h1>This is My Component</h1>
}
const Enhanced=withLogger(MyComponent);
const Hoc = () =>{
    return(
        <div>
        <h1>This is Hoc Component</h1>
        <Enhanced/>
        </div>
    );
}
export default Hoc;