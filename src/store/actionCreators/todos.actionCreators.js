import {
    // CREATE_ITEM,
    UPDATE_ITEM,
    DELETE_ITEM,
    RESTORE_ITEM,
    UPDATE_ITEMS_TEXT,
    UPDATE_ITEMS_STATUS,
    CREATE_NEW_ITEM
} from '../actions/todos.actions';

// export const createItem = () => ({
//     type: CREATE_ITEM
// });

export const restoreItem = (data) => ({
    type: RESTORE_ITEM,
    data
});

export const updateItem = (updatedItem) => ({
    type: UPDATE_ITEM,
    updatedItem
});

export const updateItemsText = (id, text) => ({
    type: UPDATE_ITEMS_TEXT,
    id,
    text
});

export const updateItemsStatus = (id, status) => ({
    type: UPDATE_ITEMS_STATUS,
    id,
    status
});

export const deleteItem = (itemId) => ({
    type: DELETE_ITEM,
    itemId
});

export const createNewItem = () => ({
    type: CREATE_NEW_ITEM,

});