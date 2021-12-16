import React from 'react';
import { useNavigate } from 'react-router-dom'
// import Checkout from './Checkout';
// import SignIn from '../../auth/SignIn'
import messages from '../../shared/AutoDismissAlert/messages'
import { Card, Button, Row } from 'react-bootstrap';

 
const button = {
  margin: '20px',
}
// function that renders Subscription Page
function Subscription(props) {
  // uses hook that allows navigation
  const navigate = useNavigate();

 // handels when user trys to sign up for subscription
 // tests if user is populated
 // if populated will go onto next test for profile
 // if passes all tests will enter checkout page

  const handleClick = (e) =>{
    // Check for signed in
    if(props.user === null){
      props.msgAlert({
        heading: 'Please Sign in',
        message: messages.signUpSubsubscription,
        variant: 'danger',
      })
      // NEVER GOT FLESHED OUT
      // Go back to correct screen after sign-in
      // props.setAfterSignInTargetUrl('/subscription/checkout')
      return navigate('/sign-in')
    } else {
      // Check for profile created
      if(props.profile){
        return navigate('/subscription/checkout')
      } else {
        props.msgAlert({
          heading: 'Please create a profile',
          message: messages.profileNeededToSubscribe,
          variant: 'danger',
        })
        return navigate('/profile')
      }
    }
  }
 
  // renders page with description of subscription 
  // also has button that triggers test if sign in is true as well as profile created
  return (
    <div className="container">
        <h2>Pick a Plan</h2>
        <h4>Become a member to access a forever-rotating curated collection of art. No commitments. Pause or cancel anytime.</h4>
        <div>
<Row>
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Text>
        Up to
        <br></br><b>2</b> pieces per season
    </Card.Text>
    <div>
    <Button onClick={handleClick} variant="dark" style={button}>Try Now</Button>
    </div>
    <Card.Text>
    1 shipment/season <br></br><b>Basic access</b><br></br>
    $89 trial season. $109/season after
    </Card.Text>
    
  </Card.Body>
</Card>
<br />

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Text>
    Up to
        <br></br><b>4</b> pieces per season
    </Card.Text>
    <Button variant="dark" style={button}>Go somewhere</Button>
    <Card.Text>
    2 shipment/season <br></br><b>Value access</b><br></br>
    $129 trial season. $149/season after
    </Card.Text>
  </Card.Body>
</Card>
<br />

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Text>
    Up to
        <br></br><b>6</b> pieces per season
    </Card.Text>
    <Button variant="dark" style={button}>Go somewhere</Button>
    <Card.Text>
    3 shipment/season <br></br><b>Premium access</b><br></br>
    $169 trial season. $189/season after
    </Card.Text>
  </Card.Body>
</Card>
</Row>
</div>





          {/* <button onClick={handleClick}>Click Here to sign up</button> */}
        
    </div>
 
  )
}
 
export default Subscription;
