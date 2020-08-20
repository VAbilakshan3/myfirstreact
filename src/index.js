import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Counter from './counter';
// import Student from './student';
// import Message from './message';
// import Welcome from './welcome'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// ReactDOM.render(<Student name='Abi' stuId='ukistu11'/>,document.getElementById('root')
// );
ReactDOM.render(<Counter/>,document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
