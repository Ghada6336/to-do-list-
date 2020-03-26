// import {ADD_ITEM, UPDATE_ITEM } from "../actions/actionTypes";
// import { DELETE_ITEM ,DELETE_ITEMS } from "../actions/actionTypes";
// import {ADD_ITEM} from "../actions/actionTypes";
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
            // const deletedItems = action.payload;
            return {
                ...state,
                // items: state.items.filter(item => item !== deletedItems )
                
                
            };

        case 'ADD_ITEM':
            const itemName = {
                title:action.payload,
                done: false,

            };
            return {
                ...state,
                items: state.items.concat([itemName] )
                
            };
        // case 'UPDATE_ITEM':
            
        //     return {
        //         ...state,
                
                
        //     };
        default:
            return state;

    }
};
export default reducers;
