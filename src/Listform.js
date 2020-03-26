import React, { Component } from 'react';
import {connect} from "react-redux";
import {adding_items} from "./redux/actions";
class Listform extends Component {
  state={
    itemName:""
  }
render() {
  
return (
  
<div>
  
  <h2 >Checker</h2>
  <h6 >To Do  </h6>
   <input  className="btn btn-warning" required type="text" placeholder="Enter To do list item" 
   onChange={event=> this.setState({itemName: event.target.value})}
   />
   
   <button className="btn btn-warning" type="button" value="Add"
   onClick={()=> this.props.adding_items(this.state.itemName)}
   >+ Add</button>
  
</div>
);
}
}
// const mapStateToProps = state =>{
//   return {
//       items:state.itemsState.items
//   };
//   };
 
  const mapDispatchToProps = dispatch =>{
    return {
      adding_items: itemName => dispatch(adding_items(itemName)),
    };
    };
  
  export default connect(null,mapDispatchToProps)(Listform);
// export default Listform;
