import { connect } from 'react-redux';

import { createItem,restoreItem } from '../../store/actionCreators/todos.actionCreators';

import Header from './Header';

const mapDispatchToProps = (dispatch) => ({
    createItem: () => dispatch(createItem()),
    restoreItem: (el) => dispatch(restoreItem(el))
});

export default connect(null, mapDispatchToProps)(Header);
