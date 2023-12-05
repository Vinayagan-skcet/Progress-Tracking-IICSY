import React, { Component } from 'react'
class Demo extends Component{
    constructor(props){
        super(props);
        this.state={count:0};
    }
    increm = () =>{
        this.setState(
            prevState =>(
                {
                 count:prevState.count+1  
                }
            )
        );
    }
    decrem = () =>{
        this.setState( prevState =>(
            {
                count:prevState.count-1
            }
        ));
    }
    render(){
        return(
            <div>
            <button onClick={this.increm}>+</button>
            {this.state.count}
            <button onClick={this.decrem}>-</button>
            </div>
        );
    }
}
export default Demo;