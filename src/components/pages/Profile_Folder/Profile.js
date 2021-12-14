// import { useButtonProps } from '@restart/ui/esm/Button'
import React, { useState, useEffect } from 'react'
import CreateProfile from './CreateProfile'
import ExistingProfile from './ExistingProfile'

const Profile = (props) => {

    useEffect(() => {
        getProfile()
    }, [])
    const [foundProfile, setFoundProfile] = useState({})
    
    const getProfile = () => {
        fetch(`http://localhost:8000/profiles/user/${props.user._id}`)
        .then(res => res.json())
        .then(foundObject => {
            // console.log('THIS IS FOUNDOBJECT.PROFILE[0]:\n',foundObject.profile[0])
            // console.log('THIS IS FOUNDOBJECT:\n',foundObject)
            // foundTags.tags.map(t =>{
            //     console.log('What is T', t._id)
            //     console.log('THIS IS T NAME', t.name)
            // })
            setFoundProfile(foundObject.profile[0])
        })
        .catch(err => console.log('THIS IS ERR',err))
    }
    
    if(foundProfile.name){
        return <ExistingProfile changePassword={props.changePassword} profile={foundProfile}/>
    } else {
        return <CreateProfile user={props.user} />
    }
}

export default Profile