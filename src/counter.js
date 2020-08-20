import React, {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    increaseCount(){
        this.setState((prevState)=>({
            count:prevState.count+1
        }))
    }

    decreaseCount(){
        this.setState({
            count:this.state.count-1
        })
    }
    multiCount(){
        this.setState({
            count:this.state.count*2
        })
    }
    divisonCount(){
        this.setState({
            count:this.state.count/2
        })
    }

    increaseFive(){
        this.increaseCount()
        this.increaseCount()
        this.increaseCount() 
        this.increaseCount()
        this.increaseCount()
    }

    render(){
        return(
            <div>
                <div>Count is {this.state.count}</div>
                <button onClick={()=>this.increaseCount()}>Increase by 1</button>
                <br></br>
                <br></br>
                <button onClick={()=>this.decreaseCount()}>Decrease by 1</button>
                <br></br>
                <br></br>
                <button onClick={()=>this.multiCount()}>Multiply by 2</button>
                <br></br>
                <br></br>
                <button onClick={()=>this.divisonCount()}>Divide by 2</button>
                <br></br>
                <br></br>
                <button onClick={()=>this.increaseFive()}>Increase by 5</button>
            </div>
        );
    }
}

export default Counter;