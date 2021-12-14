import React, { useState } from 'react'

const Profile = (props) => {

    return (
        <div>
            <h1>Profile</h1>
            <h3>My Tags</h3>
            {props.myTags.toString()}
        </div>
    )
}

export default Profile