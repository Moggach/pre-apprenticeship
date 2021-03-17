import React from 'react';
import Button from "./button.js"

class search extends React.Component {
   state = {
       text: ''
   };

   onSubmit= e => {
       e.preventDefault();
       this.props.searchBooks(this.state.text);
       this.setState( {text: ''})
   }

   onChange = e => this.setState({ [e.target.name]: e.target.value });
   
    render(){
        return (
        <div>
        <form onSubmit={this.onSubmit} className="form">
         <input 
         type="text" 
         name="text" 
         placeholder="Search books..."
         value={this.state.text}
         onChange={this.onChange}
         style={{width: "75%"}}/>
         <Button/>
       
         
         </form>
        
        </div>
        )
    }

}
 export default search 
