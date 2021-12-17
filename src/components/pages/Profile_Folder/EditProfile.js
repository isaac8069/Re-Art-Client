import React, { useState, useEffect } from 'react'
import { scryRenderedDOMComponentsWithTag } from 'react-dom/test-utils'
import { useNavigate } from 'react-router-dom'
import Tag from '../../Tag'
import messages from '../../shared/AutoDismissAlert/messages'

// Edit Profile Function
const EditProfile = (props) => {
  //useNavigate
  const navigate = useNavigate();

  // States for currentProfile, tags, and tagNames
  const [currentProfile, setCurrentProfile] = useState(props.profile)
  const [tags, setTags] = useState([])
  const [tagNames, setTagNames] = useState(props.profile.tags.map((e)=>e.name))

  // call to api when components renders and gets the tags from database
  useEffect(() => {
    getTags()
  }, [])

  // updating inputs to change currentProfile state
  const handleChange = e => {
    setCurrentProfile({...currentProfile, [e.target.name]:e.target.value})
  }

  // updating tags for currentProfile
  // checks if li item is checked and then runs code to add entire object
  const handleCheck = e => {
    if(e.target.checked){
    setCurrentProfile({...currentProfile, tags:[...currentProfile.tags, { _id: e.target.id, name: e.target.name}]})
    setTagNames([...tagNames, e.target.name])
    }
    else{
      let bufferTags = currentProfile.tags
      let index = tagNames.indexOf(e.target.name)
      bufferTags.splice(index, 1)
      setCurrentProfile({...currentProfile, tags:bufferTags})
      setTagNames(currentProfile.tags.map((e)=>e.name))
    }
  }

  const handleSubscription = e => {
    console.log('box clicked')
    if(e.target.checked){
      setCurrentProfile({...currentProfile, isSubscribed: true})
      }
    else{
      setCurrentProfile({...currentProfile, isSubscribed: false})
    }
  }

  useEffect(() => {//Delete after form works
    console.log('CurrentProfile:\n',currentProfile)
    console.log('This is tagNames', tagNames)
  }, [currentProfile])

  // api call the gets the tags
  const getTags = () => {
    fetch('http://localhost:8000/tags')
      .then(res => res.json())
      .then(foundTags => {
          console.log('Found Tags by INDEX', foundTags.tags)
          setTags(foundTags.tags)
      })
      .catch(err => console.log(err))
  }

  // sends currentProfile to api as a patch 
  const patchProfile = (e) =>{
    e.preventDefault()
    console.log('Pressed Submit button')
    let preJSONBody = {
      name: currentProfile.name,
      address: currentProfile.address,
      tags: currentProfile.tags,
      isSubscribed: currentProfile.isSubscribed,
      userId: currentProfile.userId
    }
    const requestOptions = {
        method: 'PATCH',
        body: JSON.stringify(preJSONBody),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${props.user.token}`
          },
    }
    fetch(`http://localhost:8000/profiles/user/${props.user._id}`, requestOptions)
    .then(patchedProfile=> {
        props.msgAlert({
            heading: 'Edited Profile',
            message: messages.editProfileSuccess,
            variant: 'success',
          })
      navigate('/')
    })
    .catch(err=>console.error(err))
  }

    console.log(props)
    return (
        <div>
          <h1>Edit a Profile</h1>
          <form onSubmit={patchProfile}>
            <div>
              <label htmlFor="name">Name:</label>
              <input  onChange={handleChange} type="text" name="name"  id="name"/>
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input onChange={handleChange} type="text" name="address" id="address"/>
            </div>
            <div>
              <label htmlFor="subscrition">Subscribed :</label>
              <input onChange={handleSubscription} type="checkbox" checked={currentProfile.isSubscribed} name="subscrition" id="subscrition"/>
            </div>
            <div>
              <h2>Favorite Categories</h2>
              {
                tags.map(tag => (
                  <li>
                    <label htmlFor={tag.name}>{tag.name}</label>
                    <input onChange={handleCheck} type="checkbox" checked={tagNames.includes(tag.name) ? true : false} name={tag.name} id={tag._id} />
                  </li>
                ))
              }
            </div>
            <button type="submit">Submit Profile Edit</button>
          </form>
        </div>
      )
}

export default EditProfile