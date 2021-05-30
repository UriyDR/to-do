import { connect } from 'react-redux';

import { createNewItem, restoreItem } from '../../store/actionCreators/todos.actionCreators';

import Header from './Header';

const mapDispatchToProps = (dispatch) => ({
    createNewItem: (data) => dispatch(createNewItem(data)),
    restoreItem: (el) => dispatch(restoreItem(el))
});

export default connect(null, mapDispatchToProps)(Header);