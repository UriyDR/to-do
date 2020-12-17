import {Component} from 'react'; 
import PropTypes from 'prop-types';

import './ListItem.css';

class ListItem extends Component {

    render() {
        const { data } = this.props;

        return (
            <div className='item'>
                {`Value: ${data.value}`}
                {`Text: ${data.text}`}
            </div>
        );
    }
}

ListItem.defaultProps = {
    data: {},
    editMode: false
}

ListItem.propTypes = {
    data: PropTypes.object,
    editMode: PropTypes.bool,

    updateItemData: PropTypes.func.isRequired
}

export default ListItem;
