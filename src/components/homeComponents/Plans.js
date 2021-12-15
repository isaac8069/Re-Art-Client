import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import PlansImage from "./../homeComponents/images/plansImage.jpeg"

const PlansSection = () => {

return (
<div className='row'>
    
  <Card className='col'>
    <Card.Img variant="top" src={PlansImage} />
  </Card>
  <br />
  <Card className='col'>
  <Card.Body>
    <Card.Title>Explore Our Memberships</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="dark">Learn More</Button>
  </Card.Body>
</Card>
</div>
)
}

export default PlansSection