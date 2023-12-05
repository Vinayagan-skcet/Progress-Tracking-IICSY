import React, { Component } from 'react'
export default class Timer extends Component {
    constructor(props){
     super(props);
     this.state={
         seconds:0,
         isActive:false,
     };
     this.interval = null;
    }
    componentDidMount(){
     setTimeout(()=>{
         alert("Welcome Joker")
     },5000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    handleStart = ()=>{
        if(!this.state.Active){
            this.intervalnterval = setInterval(() => {
                this.setState((prevState) => ({
                    seconds:prevState.seconds+1,
                }));
            },1000);

           this.setState({
            isActive :true,
           });
        }
    };
    handleStop = ()=>{
        this.setState({
            isActive:false,
        });
    }
    handleReset = ()=>{
        this.setState({
           seconds:0,
           isActive:false,
        })
    }
  render() {
    const { seconds, isActive } =this.state;
    return (
      <div>
      <h1>Timer:{seconds} seconds</h1>
      <button onClick={this.handleStart} disaled={isActive}>
      Start</button>
      <button onClick={this.handleStop} disabled={!isActive}>Stop</button>
      <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}
