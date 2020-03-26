// const ADD_ITEM="ADD_ITEM";

// const UPDATE_ITEM="UPDATE_ITEM";
import {DELETE_ITEM ,DELETE_ITEMS,ADD_ITEM} from "./actionTypes";
export const adding_items =itemName =>{
    return {
        type:ADD_ITEM,
        payload: itemName,
    }
}
 
// export const updating_items =() =>{
//     return {
//         type:UPDATE_ITEM,
//         payload: items,
//     }
// }

export const deleteItem = item =>{
    return {
        type:DELETE_ITEM,
        payload: item,
    }
}
export const deleteItems = items =>{
    return {
        type:DELETE_ITEMS,
        payload: items,
    }
}