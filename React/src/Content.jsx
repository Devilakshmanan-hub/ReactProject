 
import { useState } from "react"
//import './App.css'

  
 
 const Content = () => {
  const[count,setCount]=useState(99);
  function handleDecrement(){
    setCount((count)=>{return count-1});
  }
  function handleIncrement(){
    setCount((count)=>{return count+1});
     setCount((count)=>{return count+1});
  }
  
   return (
     <div>
      <p>Studying about Mobile Technology</p>
      <button onClick={handleDecrement}> - </button>
       <span>{count}</span>
        <button onClick={handleIncrement}> + </button> <br></br>
<br></br>       <img src = "\cyber.jpg" alt = "Demo image" width="600" height="600"></img>
     </div>
   )
 }
 
 export default Content
 