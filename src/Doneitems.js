import React, { Component } from 'react';
import {connect} from "react-redux";
import {deleteItem ,deleteItems} from "./redux/actions";
class Doneitems extends Component {
//  clearall(){
//    this.setState({
//     items: [],
//    }
//    )
//  }
  render() {
      const itemsList= this.props.items.filter(item => this.props.done === item.done
        //   {if (this.props.done && !item.done) return true;
        //   if (!this.props.done && item.done) return true;}

      )
        .map(item =>(
        <li className="list-group-item list-group-item-success"style={{
            textDecoration:'line-through'
          }}>{item.title}
          {/* <button type="button" className="btn btn-success">Primary</button> */}
          <div>
          <button type="button" className="btn btn-danger"
         onClick={()=> this.props.deleteItem(item)}
        >Delete</button></div>
          </li>
    ));
    return (
    <div>
        <p>
        <label >{this.props.done ? "completed":"not completed"}</label>
        <button type="button" className="btn btn-danger ml-5"
        //  onClick={()=> this.props.deleteItems(items)}
        // onClick={(e)=> this.clearall()}
        >Clear All</button></p>
        <ul className="list-group list-group-flush" >
        {itemsList}
        
        </ul>
    </div>
    );
   }
};

const mapStateToProps = state =>{
return {
    items:state.itemsState.items
};
};
const mapDispatchToProps = dispatch =>{
    return {
        deleteItem: item => dispatch(deleteItem(item)),
        deleteItems: items => dispatch(deleteItems(items)),
    };
    };

export default connect(mapStateToProps,mapDispatchToProps)(Doneitems);
