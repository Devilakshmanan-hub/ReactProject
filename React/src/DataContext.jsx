import React from 'react'
import { useEffect, useState } from 'react'
import Apirequest from './Apirequest.jsx'
import { createContext, useContext } from 'react'

const DataContext = createContext();

export const UserProvider =({children}) => {
     const[depts,setDepts]=useState([ ]);
  
     const [newdept,setNewDept] = useState('');
     const [Search, setSearch] = useState('');
     const [fetchError,setfetchError] = useState(null);
     const [isLoading,setIsLoading] = useState(true);
    const API_URL ="http://localhost:3000/depts";
    console.log(API_URL);
  useEffect(() =>{
    const fetchDepts = async () =>{
        try{
        const response = await fetch(API_URL);
        console.log(response);
        if(!response.ok) throw Error("Data not Received")
          const deptItems = await response.json();
        console.log(deptItems);
        setDepts(deptItems);
        setfetchError(null)
          }
        catch(err){
          console.log(err);
           setfetchError(err.message);
        }
        finally{
          setIsLoading(false)
        }}
        setTimeout(()=>{
          (async () => fetchDepts())()
        },3000)
  },[])
 async function handleChanges(id){
  const deptItems = depts.map((dept)=> dept.id===id ? {...dept,checked:!dept.checked}:dept)
  setDepts(deptItems)
  const myDept= deptItems.find(dept=>dept.id ===id);
  console.log( myDept);

  const updateOptions = {
         method:'PATCH',
         headers:{'Content-Type':'application/json'},
         body:JSON.stringify({checked:myDept.checked}),
     };
     const reqUrl=`${API_URL}/${id}`;
     const result = await Apirequest({url:reqUrl,optionsobj:updateOptions });
     if(result) setfetchError(result)
}

async function handleDelete(id){
  const deptItems = depts.filter((dept)=> dept.id!==id)
  setDepts(deptItems)
  
  const deleteOptions = {method:'DELETE'}
      const reqUrl = `${API_URL}/${id}`;
      console.log(id);
      console.log(`Deleting: ${reqUrl}`);

     const result = await Apirequest({url:reqUrl ,optionsobj:deleteOptions});
     if(result) setfetchError(result)
}
function handleAddItem(e){
  e.preventDefault();
  if(!newdept || depts.some(a=>a.dept.toLowerCase()=== newdept.toLowerCase())) 
    return alert("Dept already Exist!"); 
  console.log(newdept);
  handleNewAddItem(newdept)
  setNewDept('');
  // JSON.parse(localStorage.getItem(''));
}
const length = depts.length;
  

async function  handleNewAddItem(dept){
  const id = depts.length ?parseInt(depts[depts.length-1].id)+1 :1;
  const addNewItems = {id,checked:true,dept:dept}
  const courseItems =[...depts,addNewItems]
  setDepts(courseItems)
   const postOptions = {
         method:'POST',
         headers:{'Content-Type':'application/json'},
         body:JSON.stringify(addNewItems),
     };
     const result = await Apirequest({url:API_URL,optionsobj:postOptions});
     if(result) setfetchError(result)
  // localStorage.setItem("Todo List", JSON.stringify(courseItems))
}
  return (
    
       <DataContext.Provider value={{newdept,handleAddItem,setNewDept,Search,
       setSearch,handleChanges,handleDelete,depts,fetchError,isLoading,length}}>
        {children}
       </DataContext.Provider>
  
);
};
export const useUser = ()=> useContext(DataContext);
