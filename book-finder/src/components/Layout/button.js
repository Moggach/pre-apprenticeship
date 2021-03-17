import Radium from 'radium';
import React from 'react';

class Button extends React.Component {
    render() {
      return (
       
          <button style={styles}> Search </button>
      
      );
    }
  }


  const styles = {
    
      backgroundColor: '#8A2BE2',
    

      padding: "0.5rem",
      color: "white",
     ':hover': {backgroundColor: 'white', color:'#8A2BE2',
     },
  
      
    };

  export default Radium(Button);
