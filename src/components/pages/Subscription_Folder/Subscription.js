import React from 'react';
import { Route, useNavigate } from 'react-router-dom'
import Checkout from './Checkout';
import SignIn from '../../auth/SignIn'
import messages from '../../shared/AutoDismissAlert/messages'

 

// function that renders Subscription Page
function Subscription(props) {
  // uses hook that allows navigation
  const navigate = useNavigate();

 // handels when user trys to sign up for subscription
 // tests if user is populated
 // if populated will go onto next test for profile
 // if passes all tests will enter checkout page
  const handleClick = (e) =>{
    if(props.user === null){
      props.msgAlert({
        heading: 'Please Sign in',
        message: messages.signUpSubsubscription,
        variant: 'danger',
      })
      return(
        navigate('/sign-in')
      )
    } else{
      return (navigate('/subscription/checkout'))
  }
  }
 
  // renders page with description of subscription 
  // also has button that triggers test if sign in is true as well as profile created
  return (
    <div className="container">
        <h2>Subscription</h2>
        
        <div>
          <h4>
            12 month Plan
          </h4>
          <p>This subscription will have new art sent to your door every 3 months for a full year.</p>
          <button onClick={handleClick}>Click Here to sign up</button>
        </div>
    </div>
 
  );
}
 
export default Subscription;
