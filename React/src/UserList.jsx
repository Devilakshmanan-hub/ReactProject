import React from 'react'
import { Link } from 'react-router-dom'

const UserList = () => {
  return (
    <div>
      <ul>
        <li><Link to="user/101"> User 101 </Link></li>
        <li><Link to="user/102"> User 102 </Link></li>
        <li><Link to="user/103"> User 103 </Link></li>
        <li><Link to="user/104"> User 104 </Link></li>
        <li><Link to="user/105"> User 105 </Link></li>
      </ul>
    </div>
  )
}

export default UserList
