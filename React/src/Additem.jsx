import React from 'react'
import { FaPlus } from 'react-icons/fa6';
import './App.css'
import {useUser} from "./DataContext";



const Additem = ( ) => {
     
  const { newdept, setNewDept, handleAddItem } = useUser();
  // const handleAddItem = useUser();
  // const newdept = useUser();
  // const setNewDept = useUser();
  return (
    <form className='addForm' onSubmit={handleAddItem }>
        <label>Add Item</label> 
        <input autoFocus 
        id="addItem" type='text' placeholder='additem' value={newdept}
        onChange={(e)=>setNewDept(e.target.value)} required /> <br></br>
        <button type='submit'>
            <FaPlus />
        </button>
   </form> 
  )
}

export default Additem
