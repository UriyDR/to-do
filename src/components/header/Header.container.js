import { connect } from 'react-redux';

import { createItem } from '../../store/actionCreators/todos.actionCreators';

import Header from './Header';

const mapDispatchToProps = (dispatch) => ({
    createItem: () => dispatch(createItem())
});

export default connect(null, mapDispatchToProps)(Header);
