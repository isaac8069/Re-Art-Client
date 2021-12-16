import React, { useState, useEffect } from 'react'
import { scryRenderedDOMComponentsWithTag } from 'react-dom/test-utils'
import { useNavigate } from 'react-router-dom'
import Tag from '../../Tag'
import messages from '../../shared/AutoDismissAlert/messages'

const EditProfile = (props) => {

    const navigate = useNavigate();

  const [currentProfile, setCurrentProfile] = useState(props.profile)
  const [tags, setTags] = useState([])
  const [tagNames, setTagNames] = useState(props.profile.tags.map((e)=>e.name))

  useEffect(() => {
    getTags()
  }, [])

  const handleChange = e => {
    setCurrentProfile({...currentProfile, [e.target.name]:e.target.value})
  }

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

  useEffect(() => {//Delete after form works
    console.log('CurrentProfile:\n',currentProfile)
    console.log('This is tagNames', tagNames)
  }, [currentProfile])

  const getTags = () => {
    fetch('http://localhost:8000/tags')
      .then(res => res.json())
      .then(foundTags => {
          console.log('Found Tags by INDEX', foundTags.tags)
          setTags(foundTags.tags)
      })
      .catch(err => console.log(err))
  }

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