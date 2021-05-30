import { connect } from 'react-redux';

import { updateItem, deleteItem, updateItemsText, updateItemsStatus } from '../../../store/actionCreators/todos.actionCreators';

import ListItem from './ListItem';

const mapStateToProps = (state) => ({
    items: state.itemsList
});

const mapDispatchToProps = (dispatch) => ({
    updateItemsText: (id, text) => dispatch(updateItemsText(id, text)),
    updateItem: (item) => dispatch(updateItem(item)),
    deleteItem: (id) => dispatch(deleteItem(id)),
    updateItemsStatus: (id, status) => dispatch(updateItemsStatus(id, status)),
    // createNewItem: () => dispatch(createNewItem()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);