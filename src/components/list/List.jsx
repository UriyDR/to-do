import {Component} from 'react'; 
import PropTypes from 'prop-types';

import ListItem from './item/ListItem.container';

import './List.css'; 

class List extends Component{
    render(){
        return (
            <div className='list'>
                {this.props.items.map((item) => <ListItem item={item} />)}
            </div>
        )
    }
};

List.defaultProps = {
    items: []
}

List.propTypes = {
    items: PropTypes.arrayOf(Object)
};

export default List;