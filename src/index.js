import React from 'react';
import {render} from 'react-dom';
// import Converter from './Converter';
import {App} from './App';
import './App.scss';


// function App(){
//     return(
//         <div className='App'>
//             <Converter />
//         </div>
//     )
// }


const rootElement = document.getElementById("root");
render(<App/>,rootElement);
