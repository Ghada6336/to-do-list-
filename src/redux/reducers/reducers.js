// import {ADD_ITEM, UPDATE_ITEM } from "../actions/actionTypes";
// import { DELETE_ITEM ,DELETE_ITEMS } from "../actions/actionTypes";
const initialState={
items:[
    {
        title:"first",
        done: true,
    },
    {
        title:"second",
        done:false,
    },
    {   
        title:"third",
        done:false,
    }
]
};

const reducers= (state =initialState, action) =>{
    switch(action.type){
        case 'DELETE_ITEM':
            const deletedItem = action.payload;
            return {
                ...state,
                items: state.items.filter(item => item !== deletedItem )
                
                
            };
        case 'DELETE_ITEMS':
            const deletedItems = action.payload;
            return {
                ...state,
                items: state.items.filter(items => items !== deletedItems )
                
                
            };

        // case 'ADD_ITEM':
            
        //     return {
        //         ...state,
                
                
        //     };
        // case 'UPDATE_ITEM':
            
        //     return {
        //         ...state,
                
                
        //     };
        default:
            return state;

    }
};
export default reducers;
