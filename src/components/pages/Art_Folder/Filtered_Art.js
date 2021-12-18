import React, { useState, useEffect } from 'react'
// Import Pieces to show each art piece
import Pieces from './Pieces'

const Filtered_Art = (props) => {

  console.log('Profile: ',props.profile)

    // State that holds all objects from Server
    const [art, setArt] = useState([])
    // useEffect that access the Server API
    useEffect(() => {
        fetch(`http://localhost:8000/pieces/profile/${props.profile._id}`)
        .then(res => res.json())
        .then(foundPieces=>{
            // Sets API data to state allArt
            setArt(foundPieces.pieces)
        })
    }, [])

    // Maps art state and passes info from object to Pieces component
    let pieces = <h1>No Art Found! Be less picky</h1>
    // console.log('art: ',art)
    if(art){
        pieces = art.map(a => {
            return <Pieces
                key={a._id}
                title = {a.title}
                artist = {a.artist}
                imgUrl = {a.imgUrl}
                description = {a.description}
                price = {a.price}
            />
        })
    }

    return (
        <div>
            <h4>Your tags:</h4>
            {/* {props.profile.tags.toString()} */}
            <h2>Art based off your tags:</h2>
            {pieces}
        </div>
    )
}

export default Filtered_Art