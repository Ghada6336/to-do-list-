// const ADD_ITEM="ADD_ITEM";

// const UPDATE_ITEM="UPDATE_ITEM";
import {
  DELETE_ITEM,
  DELETE_ITEMS,
  ADD_ITEM,
  UPDATE_ITEM
} from "./actionTypes";
// const saving_items = itemName => {
//   localStorage.setItem("state", itemName);
// };

export const adding_items = itemName => {
  return {
    type: ADD_ITEM,
    payload: itemName
  };
};

export const updating_items = item => {
  return {
    type: UPDATE_ITEM,
    payload: item
  };
};

export const deleteItem = item => {
  return {
    type: DELETE_ITEM,
    payload: item
  };
};
export const deleteItems = () => {
  return {
    type: DELETE_ITEMS
  };
};
