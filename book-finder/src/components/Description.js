import React, { Component } from 'react';
import ShowMoreText from 'react-show-more-text';
 

 
class Description extends Component {
 
    executeOnClick(isExpanded) {
        console.log(isExpanded);
    }
 
    render() {
        return (
            <ShowMoreText
               
                lines={3}
                more='Show more'
                less='Show less'
                className='description'
                anchorClass='my-anchor-css-class'
                onClick={this.executeOnClick}
                expanded={false}
                width={400}>
                {this.props.ReadMore}

                
            
            </ShowMoreText>
        );
    }
}

export default Description;