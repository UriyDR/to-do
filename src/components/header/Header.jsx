import {Component} from 'react';
import PropTypes from 'prop-types';

import './Header.css';


class Header extends Component {
    render (){
        const { createItem }=this.props; 

        return(
            <div className= 'header'>
                <div className='headerPlus' onClick={createItem}>+</div>
               <div>ToDoShechka</div> 
           </div>
        );
    }
}

Header.propTypes={
    createItem: PropTypes.func.isRequired
}

export default Header;
