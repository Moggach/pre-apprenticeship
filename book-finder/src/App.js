import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Footer from "./components/Layout/footer.js";
import Navbar from "./components/Layout/navbar.js";
import Search from "./components/Layout/Search.js";
import Description from "./components/Description.js";



class App extends Component {
  state = {
    books: [],
  };

  searchBooks = async (text) => {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${text}`
    );
    this.setState({ books: res.data.items });

  };

 

    
  render() {
    return (
     
      <div>
        <Navbar />

        <Search searchBooks={this.searchBooks} />

        <div className="container">
          {this.state.books.map( book => (
              <div className="cards">
                <img className="img-box" src={book.volumeInfo.imageLinks.thumbnail}></img>

                <div className="title">{book.volumeInfo.title}</div>

                <Description ReadMore={book.volumeInfo.description} />
           

          
                <div className="link-to-buy"> <a href={`${book.saleInfo.buyLink}`}target="_blank">Link to Buy</a></div>
               
                
                <div>
                  <div className="tags-container">
                    <div className="tags">#Lorem Impsum</div>
                    <div className="tags">#Lorem Impsum</div>
                    <div className="tags">#Lorem Impsum</div>
                  </div>
                </div>
              </div>
            )
          )
            }

        
        </div>
      
       
        <Footer />
      </div>
    
    );
  }
}



export default App;




