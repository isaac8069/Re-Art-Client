import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { render } from 'sass'
import EditProfile from './EditProfile'

const ExistingProfile = (props) => {

    const [tagsArray, setTagsArray] = useState([<li>Loading...</li>])
    const [subscription, setSubscription] = useState('Loading...')
    const navigate = useNavigate()

    useEffect(()=>{
      if(props.profile.tags){
        setTagsArray(props.profile.tags.map((tag)=>{
          return <li>{tag.name}</li>
        }))
      }
      if(props.profile.isSubscribed){
        setSubscription('Currently Subscribed')
      }else{
        setSubscription('Currently Not Subscribed')
      }
    }, [props.profile])

    const editProfile = () => {
      console.log('Edit Profile Pressed')
      return navigate('/profile/edit')
    }

  return (
    <div>
      <h1>My Profile</h1>
      <h3>Name: {props.profile.name}</h3>
      <h3>Address: {props.profile.address}</h3>
      <h4>List of my Favorites</h4>
      <ul>{tagsArray}</ul>
      <p>{subscription}</p>

      <button onClick={editProfile}>Edit Profile</button>

    </div>
    )
}

export default ExistingProfile