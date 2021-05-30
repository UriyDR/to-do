import { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import stringify from 'qs-stringify';
import './ListItem.css';

class ListItem extends Component {
    constructor(props) {
        super(props);
        /*this.state = {
            done: false
        }*/
    }

    changeColor = (id) => {
        // получаем с базы и выводи в консоль лог. 
        axios.post(`http://localhost:8080/api/first/update-item-status`,
            stringify({
                item_id:
                    id
            }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }
        ).then(prb => {
            let payload = prb.data;
            if (payload.result === true) {
                const { updateItemsStatus } = this.props;
                updateItemsStatus(id, payload.status);
            } else {
                console.log("Error on updating items status!");
            }
        })
    }

    deleteitemOnServer = (id) => {
        
        axios.post(`http://localhost:8080/api/first/delete-item`,
            stringify({
                item_id:
                    id
            }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }
        ).then(prb => {
            let payload = prb.data;
            if (payload.result === true) {
                const { deleteItem } = this.props;
                deleteItem(id);
            } else {
                console.log("Error on deleting item!");
            }
        })
    }


    createNewItemOnServer = () => {
        
        axios.post(`http://localhost:8080/api/first/creat-new-item`,
            stringify({
                text:
                    ' '
            }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }
        ).then(prb => {
            let payload = prb.data;
            if (payload.result === true) {
                const { createnewitem } = this.props;
                createnewitem();
            } else {
                console.log("Error on create item!");
            }
        })
    }



    changeTextOnServer = (id, text) => {
        axios.post(`http://localhost:8080/api/first/update-item`,
            stringify({
                item_id:
                    id,
                    text:
                    text
            }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }
        ).then(prb => {
            let payload = prb.data;
            console.log(payload);
            if (payload.result === true) {
                console.log("Item text changed to: "+text);
            } else {
                console.log("Error on deleting item!");
            }
        })
    }

    render() {
        const { item, deleteItem, changeText, updateItemsText} = this.props;

        let divClass = 'item';
        if (item.is_done === '1') {
            divClass = divClass + ' done';
        }

        return (
            <div className={divClass}>
                <div className='doneTask' onClick={() => this.changeColor(item.id)}>
                    {item.is_done === "1" ? (<span>UNDONE</span>) : (<span>DONE</span>)}
                </div>
                <input className='inputText' type="text" onBlur={(text) => this.changeTextOnServer(item.id, text.target.value)} onChange={(text) => updateItemsText(item.id, text.target.value)} value={item.text} />
                <div className='deleteItem' onClick={() => this.deleteitemOnServer(item.id)}>x</div>
            </div>);
    }
}

ListItem.defaultProps = {
    item: {},
    editMode: false
}

ListItem.propTypes = {
    item: PropTypes.object,
    editMode: PropTypes.bool,

    updateItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default ListItem;
