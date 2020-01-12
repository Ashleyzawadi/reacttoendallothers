import React, { Component }from 'react';
import Ninjas from './Ninjas'
// import logo from './logo.svg';
// import './App.css';

class App extends Component{
  render() {
    return(
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas name="Yoshi" age="20" belt="green"/>
        <Ninjas name="Ryu" age="30" belt="black"/>

      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
