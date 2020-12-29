import { connect } from 'react-redux';

import List from './List';

const mapStateToProps = (state) => ({
    items: state.todos.itemsList
});

export default connect(mapStateToProps)(List);