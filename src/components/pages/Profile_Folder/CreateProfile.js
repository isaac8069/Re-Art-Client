import React, { useState, useEffect } from 'react'
import Tag from '../../Tag'

const CreateProfile = (props) => {

  const [newProfile, setNewProfile] = useState({})

  const handleChange = e => {
    setNewProfile({...newProfile, [e.target.name]:e.target.value})
  }
  const handleCheck = e => {
    // setNewProfile({...newProfile, tags.})
  }

  const allTags = () => {

  }

  return (
    <div>
      <h1>Create a Profile</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input onChange={handleChange} type="text" name="name" id="name"/>
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input onChange={handleChange} type="text" name="address" id="address"/>
        </div>
        <div>
          <label htmlFor="creditCard">Credit Card #:</label>
          <input onChange={handleChange} type="number" name="creditCard" id="creditCard"/>
        </div>
        <div>
          <h2>Favorite Categories</h2>
          {/* {allTags} This is just to get started */}
          <label htmlFor="surrealism">Surrealism:</label>
          <input onChange={handleCheck} type="checkbox" name="surrealism" id="surrealism" />
        </div>
      </form>
    </div>
  )
}

export default CreateProfile