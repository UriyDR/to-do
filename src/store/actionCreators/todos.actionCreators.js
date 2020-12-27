import {
    CREATE_ITEM,
    UPDATE_ITEM,
    DELETE_ITEM
} from '../actions/todos.actions';

export const createItem = () => ({
    type: CREATE_ITEM
});

export const updateItem = (updatedItem) => ({
    type: UPDATE_ITEM,
    updatedItem
});

export const deleteItem = (itemId) => ({
    type: DELETE_ITEM,
    itemId
});
