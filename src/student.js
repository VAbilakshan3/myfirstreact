

import React, {Component} from 'react';
import Results from './result'
import Place from './address'
// function Student (props){
//   return(
//     <div>
//       <h1>Hello {props.name} Your StudentID is : {props.stuId}</h1>
//     </div>
//   );
// }

class Student extends Component{
  render(){
    return(
    <div>
      <h1>Helloooooooooooooo {this.props.name} Your StudentID is : {this.props.stuId}</h1>
      <Results Results='Merit'></Results>
      <Place location='Jaffna'></Place>
    </div>
    )
  }
}

export default Student;