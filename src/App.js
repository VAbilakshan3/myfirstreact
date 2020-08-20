// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return(
//     <div>
//       <Ab/>
//       <Abc/>
//     </div>

//   );
// }

// function Ab(){
//   return(
//     <div>
//       <h1>Abiiiii</h1>
//     </div>
//   );
// }

// function Abc(){
//   return(
//     <div>
//       <h1>Abilakshan</h1>
//     </div>
//   )
// }
  // var myStyle={
  //   fontSize:90,
  //   color:'blue'
  // }
  // var x=1;
  // return (
  //   <div className="App">
  //     <h1>{2+5}</h1>
  //     <h4>
  //       {x==1?'true':'false'}
  //     </h4>
  //     <h1>Im Abi</h1>
  //     <h2 style={myStyle}>Hii</h2>
  //     <p>Hello</p>
  //     <hiii>aaa</hiii>
  //   </div>
  // );
// }

// export default App;

import React, {Component} from 'react';

class App extends Component{
  render(){
    return(
      <div>
        <Ab/>
        <Abc/>
      </div>
    );
  }
}

class Ab extends Component{
  render(){
    return(
      <div>
        <h1>Abii</h1>
      </div>
    );
  }
}

class Abc extends Component{
  render(){
    return(
      <div>
        <h3>Abi Abi</h3>
      </div>
    );
  }
}

export default App;