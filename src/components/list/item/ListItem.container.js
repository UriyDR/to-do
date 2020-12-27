import { connect } from 'react-redux';

import { updateItem, deleteItem } from '../../../store/actionCreators/todos.actionCreators';

import ListItem from './ListItem';

const mapStateToProps = (state) => ({
    //TODO
});

const mapDispatchToProps = (dispatch) => ({
    updateItem: (item) => dispatch(updateItem(item)),
    deleteItem: (id) => dispatch(deleteItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);