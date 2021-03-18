import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Layout from './components/Layout/layout.js'
import Search from './components/Layout/Search.js'

class App extends Component  {

  state = {
    books: []
}

 
 searchBooks = async text => {
   const res = await axios.get(
   `https://www.googleapis.com/books/v1/volumes?q=${text}`)
   this.setState({books: res.data.items})

  
 }
  render() {
    return (
  
<Layout>
<div>
<Search searchBooks={this.searchBooks}/></div>


        <div style={bookStyle}>
        {
          this.state.books.map(({ volumeInfo: {title, description, publishedDate, imageLinks } }) => (
            <div style={{ boxShadow: "5px 5px 10px", backgroundColor: "#ffffff", padding: "5px"}}>
              <div style = {{}}>
              <img style={{width: "50%", display: 'block', margin: "auto"}} src={imageLinks.thumbnail}></img>
                <h1>{title}</h1>
                <h2>{publishedDate}</h2>
           
                
    
                <p>{description}</p>
              
              
              </div>
            </div>
          ))
        }
      </div>
   
      </Layout>
 

    );
  }
};

const bookStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
 

};

export default App;
