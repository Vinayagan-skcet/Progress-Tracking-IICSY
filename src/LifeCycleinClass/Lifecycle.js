import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(props){
       super(props);
       this.state = {value:'Initial Value'};
    }
    componentDidMount(){
        console.log('Component did mount');
    }
    componentDidUpdate(){
        console.log('Component did update');
    }
    componentWillUnmount(){
        console.log('Component will unmount');
    }
    handleClick= () =>{
       this.setState({value:"Updated Value"});
    }
  render() {
    console.log("Render");
    return (
      <div>
      <p>{this.state.value}</p>
      <button onClick={this.handleClick}>Update Value</button>
      </div>
    )
  }
}
