import React from 'react'; 
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
import Counter from './components/counter'; 
import Counters from './components/counters'; 

/**  
    const element = <h1>Hello World</h1>; 
    console.log(element); 
    ReactDOM.render(element, document.querySelector("#root")); 
*/

ReactDOM.render(<Counters /> , document.querySelector("#root")); 