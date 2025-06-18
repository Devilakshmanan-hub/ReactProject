import React from 'react'
import { useParams } from 'react-router'

const UserDetails = () => {
    const obj = useParams();
    console.log(obj);
  return (
    <div>
        <h1>User Detail Page</h1>
        <p>User ID: {obj.id}</p>
    </div>
  )
}

export default UserDetails
