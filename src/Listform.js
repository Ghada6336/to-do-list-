import React, { Component } from 'react';

class Listform extends Component {
render() {
return (
  
<div>
  <h2 >Checker</h2>
  <h10 >To Do  </h10>
   <input  className="btn btn-outline-secondary" required type="text" placeholder="Enter To do list item" />
   
   <button className="btn btn-outline-secondary" type="button" value="Add">+ Add</button>
  
</div>
);
}
}
export default Listform;
