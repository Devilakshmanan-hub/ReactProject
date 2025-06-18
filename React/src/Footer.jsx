import React from 'react'

const Footer = () => {
    const year = new Date();
  return (
    <div>
      <h3>{length} of Departments List</h3>
      <p>&copy; All Rights Reserved @ {year.getFullYear()}</p>
    </div>
  )
}

export default Footer
// {length}