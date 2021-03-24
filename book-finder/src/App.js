import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Layout from './components/Layout/layout.js'
import Search from './components/Layout/Search.js'
import Description from './components/Description.js'


class App extends Component  {

  state = {
    books: []
}

 
 searchBooks = async text => {
   const res = await axios.get(
   `https://www.googleapis.com/books/v1/volumes?q=${text}`)
   this.setState({books: res.data.items})

  
 };
 


  render() {
    return (

<Layout>
<div>
<Search searchBooks={this.searchBooks}/></div>


        <div style={bookStyle}>
        {
          this.state.books.map(({ volumeInfo: { title, description, imageLinks  } }) => (
            <div style={{ boxShadow: "0px 3px 15px rgba(0,0,0,0.2)", backgroundColor: "#ffffff", borderRadius: "0.5rem", height: "800px", overflow: "hidden"}}>
            
              <img style={{width: "50%", display: "block", margin: "auto", marginTop: "1.5rem"}} src={imageLinks.thumbnail}></img>
              
          
                <div className="title">{title}</div>
              
          
                
                <Description ReadMore = {description}/>
                <div>
                <div className="tags-container">
                <div className="tags">#Lorem Impsum</div>
                <div className="tags">#Lorem Impsum</div>
                <div className="tags">#Lorem Impsum</div>
                </div>
                </div>
                </div>
  
              
         
          
          ))
        }
      </div>
    
      </Layout>
    );
    
      };
  
    };
const bookStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
 

};




export default App;
