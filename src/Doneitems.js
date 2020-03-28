import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteItem, deleteItems } from "./redux/actions";
class Doneitems extends Component {
  render() {
    const itemsList = this.props.items
      .filter(item => this.props.done === item.done)
      .map(item => (
        <div className="input-group mb-3" key={item.title}>
          <div className="input-group-prepend">
            <span className="input-group-text">
              <input
                type="checkbox"
                className="onoffswitch-checkbox"
                defaultChecked
              />
            </span>
          </div>
          <li
            type="text"
            className="form-control list-group-item-success"
            style={{
              textDecoration: "line-through"
            }}
          >
            {item.title}
          </li>
          <div className="input-group-append">
            <span className="input-group-text">
              <button
                type="button"
                id="button-addon2"
                onClick={() => this.props.deleteItem(item)}
              >
                X
              </button>
            </span>
          </div>
        </div>
      ));
    return (
      <div>
        <p>
          <span className="label label-primary">
            {this.props.done ? "completed" : "not completed"}
          </span>

          <button
            type="button"
            className="btn btn-danger ml-5"
            onClick={this.props.deleteItems}
          >
            Clear All
          </button>
        </p>
        <ul className="list-group list-group-flush">{itemsList}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.itemsState.items
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteItem: item => dispatch(deleteItem(item)),
    deleteItems: () => dispatch(deleteItems())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Doneitems);
