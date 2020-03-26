


import React, { Component } from 'react';
import Listform from './Listform';
import Items from './Items';
import Doneitems from './Doneitems';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <Listform />
      <div className="container">
      <div className="row">
      <div className="col">
      <br></br>
        {/* <label>To Do</label> */}
      <Items done={false} />
        </div>
        </div>
      </div>
      <div className="container">
      <div className="row">
      <div className="col">
      <br></br>
      <br></br>
        {/* <label>Done</label> */}
       
        <Doneitems done={true}/>
        </div>
        </div>
      </div>
        
        
        
    </div>
    );
    }
  }
export default App;