import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteItem, updating_items } from "./redux/actions";
class Items extends Component {
  render() {
    const itemsList = this.props.items
      .filter(item => this.props.done === item.done)
      .map(item => (
        <div className="input-group mb-3" key={item.title}>
          <div className="input-group-prepend">
            <span className="input-group-text">
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
                onClick={() => this.props.updating_items(item)}
              />
            </span>
          </div>
          <li
            type="text"
            className="form-control list-group-item-primary"
            aria-label="Amount (to the nearest dollar)"
            // className="list-group-item list-group-item-primary"
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
        <span className="label label-primary">
          {this.props.done ? "completed" : "not completed"}
        </span>

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
    updating_items: item => dispatch(updating_items(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
