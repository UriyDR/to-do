import {Component} from 'react'; 
import PropTypes from 'prop-types';

import './ListItem.css';

class ListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            done: false
          }
    }

    changeColor = ()=>{
        const { done } = this.state;
        if(done===true){
            this.setState({done:false})
        }else {
            this.setState({done:true})
        }
    }

    render() {
        const { item, deleteItem } = this.props;
        const { done } = this.state;

        let divClass = 'item';
        if (done === true) {
            divClass = divClass + ' done';
        }

        return (
            <div className={divClass}>
                {`Value: ${item.value}`}
                {`Text: ${item.text}`}
                <div className='deleteItem' onClick={() => deleteItem(item.id)}>x</div>
                <div className='doneTask' onClick= {this.changeColor}>DONE</div>
            </div>
        );
    }
}

ListItem.defaultProps = {
    item: {},
    editMode: false
}

ListItem.propTypes = {
    item: PropTypes.object,
    editMode: PropTypes.bool,

    updateItemData: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default ListItem;
