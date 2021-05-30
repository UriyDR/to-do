import {
    // CREATE_ITEM,
    UPDATE_ITEM,
    DELETE_ITEM,
    RESTORE_ITEM,
    UPDATE_ITEMS_TEXT,
    UPDATE_ITEMS_STATUS,
    CREATE_NEW_ITEM
} from '../actions/todos.actions';

import { initialState } from '../state/todos.state';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // case CREATE_ITEM:
        //     const newItemId = state.itemsList.length;
        //     const items = state.itemsList.slice();
        //     items.push({
        //         id: newItemId,
        //         text: '',
        //         is_done: 0
        //     });
        //     return {
        //         ...state,
        //         itemsList: items
        //     }


        case RESTORE_ITEM:
            const items_ = state.itemsList.slice();
            items_.push({
                id: action.data.id,
                text: action.data.text,
                is_done: action.data.is_done
            });
            return {
                ...state,
                itemsList: items_
            }
        case UPDATE_ITEMS_TEXT:
            // console.log(action.id + " " + action.text);

            return {
                ...state,
                itemsList: state.itemsList.map((item, index) => {
                    // Find the item with the matching id
                    if (item.id === action.id) {
                        // Return a new object
                        return {
                            ...item, // copy the existing item
                            text: action.text // replace the email addr
                        }
                    }

                    // Leave every other item unchanged
                    return item;
                })
            }
        case CREATE_NEW_ITEM:
            return {
                ...state,
                itemsList: [action.data].concat(state.itemsList)
            }

        case UPDATE_ITEMS_STATUS:
            return {
                ...state,
                itemsList: state.itemsList.map((item, index) => {
                    // Find the item with the matching id
                    if (item.id === action.id) {
                        // Return a new object
                        return {
                            ...item, // copy the existing item
                            is_done: action.status
                        }
                    }

                    // Leave every other item unchanged
                    return item;
                })
            }



        case DELETE_ITEM:
            return {
                ...state,
                itemsList: state.itemsList.filter(item => item.id !== action.itemId)
            }
        default:
            return state;
    }
}