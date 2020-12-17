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

  createItem = () => {
    const { items } = this.state;
    
    items.push({ text: 'Type here...' });
    this.setState({ items });
  } 
  
  render() {
    return (
      <div className= 'content'>
        <Header showCreateItem={this.createItem}/>
        <List items={this.state.items}/>
      </div>
    );
  }
}

export default App;
