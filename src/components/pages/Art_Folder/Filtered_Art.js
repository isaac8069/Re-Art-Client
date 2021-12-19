import React, { useState, useEffect } from 'react'
// Import Pieces to show each art piece
import Pieces from './Pieces'
// navigate for redirecting to checkout
import { useNavigate } from 'react-router-dom'
// button styling
import { Button, Card, Row, Col, CardGroup } from 'react-bootstrap'


const button = {
    margin: '10px',
  }


const Filtered_Art = (props) => {

  console.log('Profile: ',props.profile)
  const navigate = useNavigate()

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
    let pieces = <h5>No Art Found! Make sure your art preferences are in your profile.</h5>
    // console.log('art: ',art)
    if(art){
        pieces = art.map(a => {
            return <Pieces
                key={a._id}
                title = {a.title}
                artist = {a.artist}
                imgUrl = {a.imgUrl}
                description = {a.description}
                // price = {a.price}
            />
        })
    }

    const redirectToCheckout = () => {
        return navigate('/subscription/checkout')
      }

    // the return section doesn't like this function for some reason
    // const chosenTags = () => {
    //     props.profile.tags.map((tag)=>{
    //         return tag.name
    //         // try .join(',')
    //     }) 
    // }

    return (
        <div>
            <div className="row">
                <div className = "col">
                    <h3>Our art, your preferences. </h3>
                </div>
                <div className = "col">
                    <Button onClick={redirectToCheckout} variant="light" style={button} className = "btn btn-outline-success">Proceed to Checkout <text>&#8594;</text></Button>
                </div>
              </div>
                        {/* used to work now it doesn't consistently{
                    props.profile.tags.map((tag)=>{
                        return tag.name
                    }) } */}
                    <p>Below is a sampling of the artwork we will send you, based on your profile preferences. You can update preferences anytime in your profile.</p>
        
              <div className = "row">            
                {pieces}
              </div>
        </div>
    )
}

export default Filtered_Art