import React from 'react'
import { useParams, Link } from 'react-router-dom'

import './Character.page.css'


const CharacterPage = (props) => {
    const { id }= useParams()
    console.log('this.props ', props.location.query)
    const { character } = props.location.query

    return(
        <div className="page-wrapper" id="character-page">
            
            <div className="character-wrapper">

                <div id="more-characters-links">
                    <h2> Blossom </h2>
                    <h2> Gumball </h2>
                    <h2> Grim </h2>
                    <h2> Mr Bean </h2>
                </div>

                <div id="close-button-wrapper">
                    <Link to="/"  style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h2 id="close-button">
                            Close
                        </h2>
                    </Link>
                </div>

                <div 
                   className="character-details-wrapper"
                   style={{
                       backgroundColor: character.color
                   }}
                   >
                   {/* image here */}
                   <div id="character-image-wrapper">
                        <img src={character.image} alt={character.name} />
                   </div>

                   {/* oyther details here */}
                   <div id="character-content-details-wrapper">

                       <p id="character-name"> 
                         {/* Character Name Here  */}
                         { character.name }
                       </p>
                       <p id="character-lil-description"> 
                         {/* Character lil description  */}
                         { character.description }
                       </p>
                       
                       <p id="character-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                       </p>

                       <p id="clips-title"> Clips </p>
                       <div id="clips-wrapper">
                           <div 
                              className="clip-wrapper">
                               <img src={character.image} />
                           </div>
                           <div className="clip-wrapper">
                               <img src={character.image} />
                            </div>
                       </div>
                        
                   </div>

                </div>
            </div>
            
        </div>
    )
}


export default CharacterPage