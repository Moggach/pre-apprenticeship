import React, { Component } from 'react';
import Navbar from './navbar.js'
import Footer from './footer.js'


class App extends Component  {
    render() {
      return (
     
      <div className="Navbar" style={{ width: "80%", margin: 'auto'}}>
      <Navbar/>
      {this.props.children}
      <Footer/>
     </div>
  
      );
    }
  };
  
  export default App;