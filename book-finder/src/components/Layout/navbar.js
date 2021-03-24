import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen} from '@fortawesome/free-solid-svg-icons'

export class navbar extends Component {
    render() {
        return (
        <div className="navbar" style={{ color: "#8A2BE2", display: "flex", justifyContent: "center", marginTop: '1rem'}}>
        <FontAwesomeIcon className="icons" icon={faBookOpen} size = '4x' color ='#8A2BE2'/>
        <h1 style={{marginLeft: "0.5rem", marginTop: "0.3rem"}}>BookFinder</h1>
        
        </div>
        )
    }
}

export default navbar;