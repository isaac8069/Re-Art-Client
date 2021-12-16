import React, { useState, useEffect } from 'react'
import { scryRenderedDOMComponentsWithTag } from 'react-dom/test-utils'
import { useNavigate } from 'react-router-dom'
import Tag from '../../Tag'
import messages from '../../shared/AutoDismissAlert/messages'

const CreateProfile = (props) => {

  const navigate = useNavigate();

  const [newProfile, setNewProfile] = useState({
    //Other stuff will go in this object but basically we need to declare a property called tags as an array so that the spread operator will work in the first call of handleCheck
    tags:[],
    isSubscribed: false,
    userId: props.user._id
  })
  const [tags, setTags] = useState([])

  useEffect(() => {
    getTags()
  }, [])

  const handleChange = e => {
    setNewProfile({...newProfile, [e.target.name]:e.target.value})
  }
  const handleCheck = e => {
    if(e.target.checked){
    setNewProfile({...newProfile, tags:[...newProfile.tags, e.target.id]})
    }
    else{
      let bufferTags = newProfile.tags
      let index = newProfile.tags.indexOf(e.target.id)
      bufferTags.splice(index, 1)
      setNewProfile({...newProfile, tags:bufferTags})
    }
  }

  useEffect(() => {//Delete after form works
    console.log('newProfile:\n',newProfile)
  }, [newProfile])

  const getTags = () => {
    fetch('http://localhost:8000/tags')
      .then(res => res.json())
      .then(foundTags => {
          // console.log('Found Tags by INDEX', foundTags.tags)
          setTags(foundTags.tags)
      })
      .catch(err => console.log(err))
  }

  const postProfile = (e) =>{
    // Get 2 pieces to put in their cart
    // fetch('http://localhost:8000/pieces')

    e.preventDefault()
    // console.log('Pressed Submit button')
    let preJSONBody = {
      name: newProfile.name,
      address: newProfile.address,
      tags: newProfile.tags,
      isSubscribed: newProfile.isSubscribed,
      userId: newProfile.userId
    }
    fetch('http://localhost:8000/profiles',{
      method: 'POST',
      body: JSON.stringify(preJSONBody),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response=>response.json())
    .then(postedBounty=> {
      props.msgAlert({
        heading: 'Created Profile',
        message: messages.profileCreationSuccessful,
        variant: 'success',
      })
      navigate('/')
    })
    .catch(err=>console.error(err))
  }

  return (
    <div>
      <h1>Create a Profile</h1>
      <form onSubmit={postProfile}>
        <div>
          <label htmlFor="name">Name:</label>
          <input required onChange={handleChange} type="text" name="name" id="name"/>
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input required onChange={handleChange} type="text" name="address" id="address"/>
        </div>
        <div>
          <h2>Favorite Categories</h2>
          {
            tags.map(tag => (
              <li>
                <label htmlFor={tag.name}>{tag.name}</label>
                <input onChange={handleCheck} type="checkbox" name={tag.name} id={tag._id} />
              </li>
            ))
          }
        </div>
        <button type="submit">Click Here to Create Profile</button>
      </form>
    </div>
  )
}

export default CreateProfile