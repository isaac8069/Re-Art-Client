import React, { useState, useEffect } from 'react'
import { scryRenderedDOMComponentsWithTag } from 'react-dom/test-utils'
import Tag from '../../Tag'

const CreateProfile = (props) => {

  const [newProfile, setNewProfile] = useState({
    //Other stuff will go in this object but basically we need to declare a property called tags as an array so that the spread operator will work in the first call of handleCheck
    tags:[]
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
          console.log('Found Tags by INDEX', foundTags.tags)
          setTags(foundTags.tags)
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>Create a Profile</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input required onChange={handleChange} type="text" name="name" id="name"/>
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input required onChange={handleChange} type="text" name="address" id="address"/>
        </div>
        {/* <div>
          <label htmlFor="creditCard">Credit Card #:</label>
          <input onChange={handleChange} type="number" name="creditCard" id="creditCard"/>
        </div> */}
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
      </form>
    </div>
  )
}

export default CreateProfile