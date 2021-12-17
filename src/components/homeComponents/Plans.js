import React from 'react'
import { Route, useNavigate } from 'react-router-dom'
import { Card, CardGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import PlansImage from "./../homeComponents/images/plansImage.jpeg"


const cardstyle = {
    margin: '25px'
}

const text = {
    fontSize: '60px'
}

const PlansSection = () => {

  const navigate = useNavigate()
const handleClick = (e) =>{
  return(
    navigate('/subscription')
  )
}
return (
<div>
    <CardGroup>
  <Card style={cardstyle}>
    <Card.Img variant="top" src={PlansImage} />
  </Card>
  <br />
  <Card style={cardstyle}>
  <Card.Body>
    <Card.Title style={text}>Explore Our Memberships</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="dark" onClick={handleClick}>Learn More</Button>
  </Card.Body>
</Card>
</CardGroup> 
</div>
)
}

export default PlansSection