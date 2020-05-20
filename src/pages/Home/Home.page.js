import React from 'react'
import { Link, Redirect, withRouter, useHistory } from 'react-router-dom'

import './Home.css'
import CharacterCard from '../../components/CharacterCard/CharacterCard'


import dexter_image from '../../images/dexter.png'
import blossom_image from '../../images/blossom.png'
import gumball_image from '../../images/gumball.png'
import grim_image from '../../images/grim.png'
import johny_image from '../../images/johny.png'
import mr_bean_image from '../../images/mr-bean.png'


const characters = [
    {
        id: '1',
        name: 'Dexter',
        description: 'Dexter\'s Laboratory',
        image: dexter_image,
        color: '#efa232'
    },
    {
        id: '2',
        name: 'Blossom',
        description: 'Powerpuff Girls',
        image: blossom_image,
        color: '#e0653a'
    },
    {
        id: '3',
        name: 'Gumball',
        description: 'Dexter\'s Laboratory',
        image: gumball_image,
        color: '#3cb6e3'
    },
    {
        id: '4',
        name: 'Grim',
        description: 'Dexter\'s Laboratory',
        image: grim_image,
        color: '#bb5f4c'
    },
    {
        id: '5',
        name: 'Johny',
        description: 'Dexter\'s Laboratory',
        image: johny_image,
        color: '#3797df'
    },
    {
        id: '6',
        name: 'Mr Bean',
        description: 'Dexter\'s Laboratory',
        image: mr_bean_image,
        color: '#c69249'
    }
]


const HomePage  = (props) => {
    const history = useHistory()

    const goViewCharacterDetails = (character)=> {
        console.log('going to see ', character)

        const characterID = character.id
        // return <Redirect to="/" />
        // history.push('/character/dyurgjfvjk', { character: {}})
        props.router.push({ pathname: '/character/dfbfgbrfg', query: { character: character } })
    }

    return(
        <div className="page-wrapper">

            {/** character list */}            
            <div className="characters-wrapper">
                {
                    characters.map((character)=> {

                        return (
                            <div 
                              key={character.id}
                              className="character-card-outer-wapper"
                             >
                              <Link to={{ 
                                    pathname: `/character/hrjkhr`, 
                                    query: {
                                     character: character
                                    }
                              }}>
                                <CharacterCard character={character} />
                              </Link>
                            </div>
                        )
                    })
                }
            </div>
            {/** character list */} 

        </div>
    );
}


export default HomePage
