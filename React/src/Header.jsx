 

import './App.css'

import Itemlist from './Itemlist';
const Header = ({title,depts}) => {
 
  
  return (
    <main>
       <h1>{title}</h1> 
      {(depts.length)?(
        <Itemlist 
      // depts={depts}
      // handleChanges={handleChanges}
      // handleDelete={handleDelete}
       />
      ):(
      <p>Your Departments List is Empty!</p>
      )}
    </main>
  )
}


export default Header
// {depts,handleChanges,handleDelete}