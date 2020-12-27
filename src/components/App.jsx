import {Component} from 'react';

import Header from './header/Header.container';
import List from './list/List.container';

import './App.css';

/**
 * {
 *   "text": "Some text"
 * }
 */

class App extends Component {

  render() {
    return (
      <div className= 'content'>
        <Header />
        <List />
      </div>
    );
  }
}

export default App;
