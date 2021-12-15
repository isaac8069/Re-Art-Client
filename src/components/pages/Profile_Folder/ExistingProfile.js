import React, { useState, useEffect } from 'react'
import { render } from 'sass'

const ExistingProfile = (props) => {

    const [tagsArray, setTagsArray] = useState([<li>Loading...</li>])

    useEffect(()=>{
      console.log(props.profile.tags)
      if(props.profile.tags){
        setTagsArray(props.profile.tags.map((tag)=>{
          console.log(tag.name)
          return <li>{tag.name}</li>
        }))
        console.log('This is tagsArray after if stament',tagsArray)
      }
    }, [props.profile])

  return (
    <div>
      <h1>My Profile</h1>
      <h3>{props.profile.name}</h3>
      <h4>List of my Favorites</h4>
      <ul>{tagsArray}</ul>
    </div>
    )
}

export default ExistingProfile