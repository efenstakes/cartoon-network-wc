import React from 'react'

import './CharacterCard.css'
import blossom from '../../images/blossom.png'


const CharacterCard = ({ character }) => {

    return (
        <div className="character-card-wrapper">
            
            <div className="character-card-image">
                <img 
                    src={character.image} 
                    alt="kublechnikov"
                />
            </div>

            <div className="character-card-content"
              style={{
                  backgroundColor: character.color
              }}>

                <p className="character-name"> 
                  { character.name } 
                </p>
                <p className="character-description"> 
                  { character.description } 
                </p>

            </div>
            
        </div>
    );
}


export default CharacterCard