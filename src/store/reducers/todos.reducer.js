import {
    CREATE_ITEM,
    UPDATE_ITEM,
    DELETE_ITEM
} from '../actions/todos.actions';

import { initialState } from '../state/todos.state';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_ITEM:
            // Временный костыль
            const newItemId = items.length;
            const items = state.itemsList.slice();
            items.push({
                id: newItemId,
                text: '',
                complete: false
            });
            return {
                ...state,
                itemsList: items
            }
        case UPDATE_ITEM:
            // СДЕЛАЙ САМ
            return {
                ...state,
                // itemsList: 
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
