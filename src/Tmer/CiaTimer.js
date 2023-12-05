import React,{ Component} from 'react'
export default class Timer extends Component{
    constructor(props){
        super(props);
        this.state= {
            elapsedtime:0,
        }
        this.timer=null;
    }
    componentDidMount(){
       this.timer=setInterval(()=>{
        this.setState((prevState)=>({
            elapsedtime:prevState.elapsedtime+1
        }))
       },1000)
    }
    componentWillUnmount(){
        this.timer=null;
    }
   render(){
    return(
         <div>
         <h2>Time:{this.state.elapsedtime} seconds</h2>
         </div>
    );
   }
}