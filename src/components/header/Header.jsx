import {Component} from 'react';
import PropTypes from 'prop-types';
import stringify from 'qs-stringify';
import './Header.css';
import axios from 'axios';

class Header extends Component {
    
    componentDidMount() {
        const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
          }
    //     axios.post(`http://localhost:8080/api/first/get-data`, 
    //     stringify({ 
    //         text: 
    //         "Some info" 
    // }), config
    // ).then(res => {
    //         console.log(res);
    //         console.log(res.data);

    //     })

   
    axios.post(`http://localhost:8080/api/first/nafront`, 
        config
    ).then(prb => {
            let payload = prb.data;
            
            const { restoreItem }=this.props; 
            payload.forEach(el => {
                restoreItem(el);
            });
        })
    
    }

  
   createNewItemOnServer = () => {
        
        axios.post(`http://localhost:8080/api/first/create-new-item`,
            stringify({}), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }
        ).then(prb => {
            let payload = prb.data;
            if (typeof payload.result === 'object') {
                const { createNewItem } = this.props;
                createNewItem(payload.result);
            } else {
                console.log("Error on create item!");
            }
        })
    }


    render (){
        const { createNewItem }=this.props; 

        return(
            <div className= 'header'>
                <div className='headerPlus' onClick={() => this.createNewItemOnServer()}><span className='headerPlusSpan'>+</span></div>
               <div className='headerToDo'>ToDoShechka</div> 
           </div>
        );
    }
}

Header.propTypes={
    createNewItem: PropTypes.func.isRequired
}

export default Header;
