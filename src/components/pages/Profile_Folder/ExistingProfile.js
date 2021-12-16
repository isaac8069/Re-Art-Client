import React, { useState, useEffect } from 'react'
import { render } from 'sass'

const ExistingProfile = (props) => {

    const [tagsArray, setTagsArray] = useState([<li>Loading...</li>])
    const [subscription, setSubscription] = useState('Loading...')

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

  return (
    <div>
      <h1>My Profile</h1>
      <h3>{props.profile.name}</h3>
      <h4>List of my Favorites</h4>
      <ul>{tagsArray}</ul>
      <p>{subscription}</p>
    </div>
    )
}

export default ExistingProfile