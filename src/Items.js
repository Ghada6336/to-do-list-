import React, { Component } from 'react';
import {connect} from "react-redux";
import {deleteItem,updating_items} from "./redux/actions";
class Items extends Component {
  render() {
      const itemsList= this.props.items.filter(item => this.props.done === item.done
        //   {if (this.props.done && !item.done) return true;
        //   if (!this.props.done && item.done) return true;}

      )
        .map(item =>(
        <li className="list-group-item list-group-item-primary" key={item.title}>{item.title}
        <div>
        <button type="button" className="btn btn-primary mr-1"
        onClick={()=> this.props.updating_items(item)}
        >Move to done
        {/*  {item.done ? "to do " :"not done"} */}
        </button>
        <button type="button" className="btn btn-danger"
         onClick={()=> this.props.deleteItem(item)}
        >Delete</button></div>
        </li>
    ));
    return (
    <div>
        <span className ="label label-primary">{this.props.done ? "completed":"not completed"}</span>
        
        <ul className="list-group list-group-flush">
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
        updating_items: item => dispatch(updating_items(item)),
    };
    };

export default connect(mapStateToProps,mapDispatchToProps  )(Items);