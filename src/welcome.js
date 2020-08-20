import React, {Component} from 'react';
import Uki from './uki'

class Welcome extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'Reactjs by Abi'
        }
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.name}</h1> 
                <Uki myname = {this.state.name}/>
            </div>
        );
    }
}

export default Welcome;