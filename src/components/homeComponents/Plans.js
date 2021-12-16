import React from 'react'
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

const routeChange = () =>{
// This will handle route change to Plans when button Learn More is clicked
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
    <Button variant="dark" onClick={routeChange}>Learn More</Button>
  </Card.Body>
</Card>
</CardGroup> 
</div>
)
}

export default PlansSection