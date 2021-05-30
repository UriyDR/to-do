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

    // получаем с базы и выводи в консоль лог. 
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

  


    render (){
        const { createNewItem }=this.props; 

        return(
            <div className= 'header'>
                <div className='headerPlus' onClick={createNewItem}><span className='headerPlusSpan'>+</span></div>
               <div className='headerToDo'>ToDoShechka</div> 
           </div>
        );
    }
}

Header.propTypes={
    createItem: PropTypes.func.isRequired
}

export default Header;
