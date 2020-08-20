import React,{ Component } from "react";

class Message extends Component{
    constructor (){
        super()
        this.state={
            text:"Welcome to Home"
        }
        
        this.state={
            mes:"I'm Abi"
        }
    }

    changeMessage(){
        this.setState({
            text:"Thank You So much"
        })
    }
    editMessage(){
        this.setState({
            text:"Welcome to Home"
        })
    }
    myMessage(){
        this.setState({
            mes:"My Name Abilakshan"
        })
    }

    mineMessage(){
        this.setState({
            mes:"I'm Abi"
        })
    }

    render(){
        return(
            <div>
                <h1>
                    {this.state.text}
                </h1>
                <button onClick={()=>this.changeMessage()}>OnClick</button>
                <br></br>
                <button onClick={()=>this.editMessage()}>OnClick</button>

                <h3>
                    {this.state.mes}
                </h3>

                <button onClick={()=>this.myMessage()}>OnClick</button>
                <br></br>
                <button onClick={()=>this.mineMessage()}>OnClick</button>
            </div>
        );
    }
        
    
}
export default Message;