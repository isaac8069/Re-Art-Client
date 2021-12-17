import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { render } from 'sass'
import { Card, ListGroup, Button } from 'react-bootstrap'
import ChangePassword from '../../auth/ChangePassword';
import EditProfile from './EditProfile'

const box = {
  textAlign: 'left',
  margin: '2px',
  padding: '5px'
}

const button = {
  margin: '10px',
}

const bgc = {
  backgroundColor: 'lightgrey'
}

const password = {
  cursor: 'pointer'
}


const ExistingProfile = (props) => {

  const [tagsArray, setTagsArray] = useState([<li>Loading...</li>])
  const [subscription, setSubscription] = useState('Loading...')
  const navigate = useNavigate()

  useEffect(() => {
    if (props.profile.tags) {
      setTagsArray(props.profile.tags.map((tag) => {
        return <li>{tag.name}</li>
      }))
    }
    if (props.profile.isSubscribed) {
      setSubscription('Currently Subscribed')
    } else {
      setSubscription('Currently Not Subscribed')
    }
  }, [props.profile])

  const editProfile = () => {
    console.log('Edit Profile Pressed')
    return navigate('/profile/edit')
  }

  const changePassword = () => {
    return navigate('/change-password')
  }
  

  return (
    <div>
    <div className='container' style={bgc}>
      <h5>Profile</h5>
      <div className='container' style={box}>
        <Card style={{ width: '18rem' }}>
          <Card.Header>Account Details</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item style={box}>{props.profile.name}</ListGroup.Item>
            <ListGroup.Item style={box}>{props.profile.address}</ListGroup.Item>
            <Card.Link style={box, password} onClick={changePassword}>Change Password</Card.Link>
          </ListGroup>
        </Card>
      </div>

      <div className='container' style={box}>
        <Card style={{ width: '18rem' }}>
          <Card.Header>Favorites</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>{tagsArray}</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>

      <p>{subscription}</p>
      <Button onClick={editProfile} variant="light" style={button}>Edit Profile</Button>
      {/* <button onClick={editProfile}>Edit Profile</button> */}

    </div>
    </div>
  )
}

export default ExistingProfile