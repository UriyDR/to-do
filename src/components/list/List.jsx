import {Component} from 'react'; 
import PropTypes from 'prop-types';

import ListItem from './item/ListItem';

import './List.css'; 

class List extends Component{
    render(){
        return (
            <div className='list'>
                {this.props.items.map((item) => <ListItem item={item} deleteItem={this.props.deleteItem}/>)}
            </div>
        )
    }
};

List.defaultProps = {
    items: []
}

List.propTypes = {
    items: PropTypes.arrayOf(Object),

    deleteItem: PropTypes.func.isRequired
};

export default List;