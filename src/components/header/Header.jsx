import {Component} from 'react';
import PropTypes from 'prop-types';

import './Header.css';


class Header extends Component {
    render (){
        const {  showCreateItem }=this.props; 

        return(
            <div className= 'header'>
                <div className='headerPlus' onClick={showCreateItem}>+</div>
               <div>ToDoShechka</div> 
            </div>
        );
    }
}

Header.propTypes={
    showCreateItem: PropTypes.func.isRequired
}

export default Header;
