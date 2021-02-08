import React from 'react';
import axios from 'axios';


class Books extends React.Component{ 
  state = {
     books: [],
  }
  async componentDidMount() {
    const res = await axios.get('https://www.googleapis.com/books/v1/volumes?q=baking')
    this.setState({books: res.data.items})
    console.log(this.state)
   
  };

  render() {
    return (<div>
    {this.state.books.map(book => (
        <>
        <p>Title: {book.volumeInfo.title}</p>
        <p>Publisher: {book.volumeInfo.publisher}</p>
        <p>Description: {book.volumeInfo.description}</p>
        <img src={book.volumeInfo.imageLinks.smallThumbnail} style={{width: "100px"}}/>
        </>
    ))}
    </div>);
}
};
  
export default Books