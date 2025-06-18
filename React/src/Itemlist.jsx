 import { useEffect, useState } from 'react'
import Courselist from './Courselist'
import { useUser } from './DataContext';
 


const Itemlist = () => {
    const { depts } = useUser();
  return (
    <ul>
        {depts.map((dept)=>
        <Courselist 
         key={dept.id}
          id={dept.id} 
      //   dept={dept}
      // handleChanges={handleChanges}
      // handleDelete={handleDelete} 
      />
      )}

      </ul>
    
  )
}

export default Itemlist
// {depts,handleChanges,handleDelete}