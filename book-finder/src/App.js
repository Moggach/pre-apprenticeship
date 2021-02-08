import React, { Component } from 'react';
import './App.css';

import Books from './components/Books.js'
import Search from './components/Search.js'

class App extends Component  {
  render() {
    return (
     <>
    <Search/>
    <Books/>
   
    </>
    );
  }
};

export default App;
