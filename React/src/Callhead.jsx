import React from 'react'


const Callhead = ({newFunction}) => {
    console.log("Header Rendered");
    newFunction={newFunction};
  return (
    <div>
      <h1>CallbackHeader</h1>
    </div>
  )
}

export default React.memo(Callhead)
