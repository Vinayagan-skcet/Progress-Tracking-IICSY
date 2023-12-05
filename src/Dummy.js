import React from 'react'
import ReactDom from 'react-dom/client';
class Dummy extends React.Component{
    render(){
        return <h2>This colour is {this.props.color}</h2>;
    }
}
const container=document.getElementById("root");
const root=ReactDom.createRoot(container);
root.render(<Dummy color="Red"/>);

export default Dummy