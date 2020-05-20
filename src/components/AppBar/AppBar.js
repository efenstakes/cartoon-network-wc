import React from 'react'
import './AppBar.css'


const AppBar = (props) => {

    return(
        <div className="appbar">
            
            {/* app title */}
            <div className="appbar-header-wrapper">
                <p className="appbar-header"> 
                    CN
                 <span id="logo-not-cn-word">
                    Characters 
                 </span>
                </p>
            </div>
            
            {/* app search bar */}
            <div className="search-bar-wrapper">
                <input 
                  type="text" 
                  placeholder="Search a Character..."
                  className="search-bar"
                  />
            </div>
            
            {/* app routes */}
            <div className="appbar-links-wrapper">
                
                <p> Menu </p>
                
            </div>

        </div>
    );
}


export default AppBar