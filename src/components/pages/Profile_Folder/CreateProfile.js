import React, { useState, useEffect } from 'react'
import { scryRenderedDOMComponentsWithTag } from 'react-dom/test-utils'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Card } from 'react-bootstrap'
import Tag from '../../Tag'
import messages from '../../shared/AutoDismissAlert/messages'

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

const CreateProfile = (props) => {

  const navigate = useNavigate();

  const [newProfile, setNewProfile] = useState({
    //Other stuff will go in this object but basically we need to declare a property called tags as an array so that the spread operator will work in the first call of handleCheck
    tags: [],
    isSubscribed: false,
    userId: props.user._id
  })
  const [tags, setTags] = useState([])

  useEffect(() => {
    getTags()
  }, [])

  const handleChange = e => {
    setNewProfile({ ...newProfile, [e.target.name]: e.target.value })
  }
  const handleCheck = e => {
    if (e.target.checked) {
      setNewProfile({ ...newProfile, tags: [...newProfile.tags, e.target.id] })
    }
    else {
      let bufferTags = newProfile.tags
      let index = newProfile.tags.indexOf(e.target.id)
      bufferTags.splice(index, 1)
      setNewProfile({ ...newProfile, tags: bufferTags })
    }
  }

  useEffect(() => {//Delete after form works
    console.log('newProfile:\n', newProfile)
  }, [newProfile])

  const getTags = () => {
    fetch('http://localhost:8000/tags')
      .then(res => res.json())
      .then(foundTags => {
        console.log('Found Tags by INDEX', foundTags.tags)
        setTags(foundTags.tags)
      })
      .catch(err => console.log(err))
  }


  const postProfile = (e) => {
    e.preventDefault()
    console.log('Pressed Submit button')
    let preJSONBody = {
      name: newProfile.name,
      address: newProfile.address,
      tags: newProfile.tags,
      isSubscribed: newProfile.isSubscribed,
      userId: newProfile.userId
    }
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(preJSONBody),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.user.token}`
      },
    }
    fetch('http://localhost:8000/profiles', requestOptions)
    .then(response=>response.json())
    .then(postedProfile=> {
      props.msgAlert({
        heading: 'Created Profile',
        message: messages.profileCreationSuccessful,
        variant: 'success',
      })
    })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <div className='container' style={bgc}>
        <h5>Create a Profile</h5>
        <Form onSubmit={postProfile}>
          <div className='container' style={box}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control style={{ width: '18rem' }} placeholder="Enter name" onChange={handleChange} type="text" name="name" id="name" />
            </Form.Group>
          </div>

          <div className='container' style={box}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Address</Form.Label>
              <Form.Control style={{ width: '18rem' }} placeholder="Address" onChange={handleChange} type="text" name="address" id="address" />
            </Form.Group>
          </div>

          <div className='container' style={box}>
            <Card style={{ width: '18rem' }}>
              <Card.Header>Favorites</Card.Header>
              {
                tags.map(tag => (
                  <li>
                    <label htmlFor={tag.name}>{tag.name}</label>
                    <input onChange={handleCheck} type="checkbox" name={tag.name} id={tag._id} style={button} />
                  </li>
                ))
              }
            </Card>
          </div>
          <Button variant="light" type="submit" style={button}>
            Submit
          </Button>

        </Form>
      </div>
    </div>
  )
}


export default CreateProfile