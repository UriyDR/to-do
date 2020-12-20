import {Component} from 'react';

import Header from './header/Header';
import List from './list/List';

import './App.css';

/**
 * {
 *   "text": "Some text"
 * }
 */

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  deleteItem = (id) => {
    const { items } = this.state;

    this.setState({ 
      items: items.filter(item => item.id !== id)
    });
  }

  createItem = () => {
    const { items } = this.state;

    // Временный костыль
    const itemsSize = items.length;
    
    items.push({
      id: itemsSize,
      text: 'Type here...'
    });
    this.setState({ items });
  } 

  render() {
    const { items } = this.state;

    return (
      <div className= 'content'>
        <Header createItem={this.createItem}/>
        <List items={items} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
