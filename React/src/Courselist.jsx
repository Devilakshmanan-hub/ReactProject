 
import { FaTrash } from "react-icons/fa6";
import './App.css'
import {useUser} from "./DataContext";

const Courselist = ({ id }) => {
  const {depts,handleChanges,handleDelete} = useUser();

  const dep = depts.find(d => d.id === id);

  if (!dep) return null; // safety check
  return (
    (
      <div>
         <li className='Item' >
            <input className="dev"
            type='checkbox' 
            onChange={()=>handleChanges(dep.id)} checked={dep.checked} 
            />
            <label>{dep.dept}</label>
            <FaTrash 
            role='button' 
            onClick={()=>handleDelete(dep.id)}/>
          </li>
          </div>
        )
  )
}

export default Courselist
// {dept,handleChanges,handleDelete}