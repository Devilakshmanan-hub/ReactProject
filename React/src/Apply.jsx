 import React from 'react'
 import Useref from './Useref.jsx'
 import Content from './Content.jsx'
 import Footer from './Footer.jsx'
 import Callhead from './Callhead.jsx'
import { useState,useMemo,useCallback,useReducer } from 'react'
import Additem from './Additem.jsx'
import Searchitem from './Searchitem.jsx'
import { useUser } from './DataContext.jsx'; 
// import Apirequest from './Apirequest.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import UserList from './UserList.jsx'
import UserDetails from './UserDetails.jsx'
import { UserProvider } from './DataContext.jsx'
import HeaderRenderer from './HeaderRenderer.jsx'
import useLocalStorage from '../Hook/useLocalStorage.jsx'
function Apply(){

  const [name,SetName]= useLocalStorage ('username','')
  const [id,SetID]=useLocalStorage('userId','')
//USEMEMO,USECALLBACK HOOKS
  const [number,setNumber]=useState(0);
  const [counter,setCounter]=useState(0);
  const [count,setCount]=useState(0);
  const newFunction=useCallback(()=>{setCount(count+1)},[count]);
  function cubeNum(num){
    console.log("Calculation Done!");
    return Math.pow(num,3)
  }
  const result = useMemo(()=>cubeNum(number),[number]);
 // USEREDUCER HOOK
  const initialState = {Count:0};
  const reducer=(State,action)=>{
    switch(action.type){
      case 'increase':{
        return{Count:State.Count+1}
      }
      case 'decrease':{
        return{Count:State.Count-1}
      }
      case 'input':{
        return{Count:action.value}
      }
      default:{return State}
    }
  }
  const [State,dispatch]=useReducer(reducer,initialState)
      // const[depts,setDepts]=useState([ ]);
   
//      const [newdept,setNewDept] = useState('');
//      const [Search, setSearch] = useState('');
    //  const [fetchError,setfetchError] = useState(null);
    //  const [isLoading,setIsLoading] = useState(true);
    //  const {fetchError,isLoading} = useUser();
//     const API_URL ="http://localhost:3000/depts";
//     console.log(API_URL);
//   useEffect(() =>{
//     const fetchDepts = async () =>{
//         try{
//         const response = await fetch(API_URL);
//         console.log(response);
//         if(!response.ok) throw Error("Data not Received")
//           const deptItems = await response.json();
//         console.log(deptItems);
//         setDepts(deptItems);
//         setfetchError(null)
//           }
//         catch(err){
//           console.log(err);
//            setfetchError(err.message);
//         }
//         finally{
//           setIsLoading(false)
//         }}
//         setTimeout(()=>{
//           (async () => fetchDepts())()
//         },3000)
//   },[])
//  async function handleChanges(id){
//   const deptItems = depts.map((dept)=> dept.id===id ? {...dept,checked:!dept.checked}:dept)
//   setDepts(deptItems)
//   const myDept= deptItems.find(dept=>dept.id ===id);
//   console.log( myDept);

//   const updateOptions = {
//          method:'PATCH',
//          headers:{'Content-Type':'application/json'},
//          body:JSON.stringify({checked:myDept.checked}),
//      };
//      const reqUrl=`${API_URL}/${id}`;
//      const result = await Apirequest({url:reqUrl,optionsobj:updateOptions });
//      if(result) setfetchError(result)
// }

// async function handleDelete(id){
//   const deptItems = depts.filter((dept)=> dept.id!==id)
//   setDepts(deptItems)
  
//   const deleteOptions = {method:'DELETE'}
//       const reqUrl = `${API_URL}/${id}`;
//       console.log(id);
//       console.log(`Deleting: ${reqUrl}`);

//      const result = await Apirequest({url:reqUrl ,optionsobj:deleteOptions});
//      if(result) setfetchError(result)
// }
// function handleAddItem(e){
//   e.preventDefault();
//   if(!newdept || depts.some(a=>a.dept.toLowerCase()=== newdept.toLowerCase())) 
//     return alert("Dept already Exist!"); 
//   console.log(newdept);
//   handleNewAddItem(newdept)
//   setNewDept('');
//   // JSON.parse(localStorage.getItem(''));
// }
  

// async function  handleNewAddItem(dept){
//   const id = depts.length ?parseInt(depts[depts.length-1].id)+1 :1;
//   const addNewItems = {id,checked:true,dept:dept}
//   const courseItems =[...depts,addNewItems]
//   setDepts(courseItems)
//    const postOptions = {
//          method:'POST',
//          headers:{'Content-Type':'application/json'},
//          body:JSON.stringify(addNewItems),
//      };
//      const result = await Apirequest({url:API_URL,optionsobj:postOptions});
//      if(result) setfetchError(result)
//   // localStorage.setItem("Todo List", JSON.stringify(courseItems))
// }

    function Departments(){
       let course = ["CSE","MECH","CIVIL","ECE","EEE"];
       const int = Math.floor(Math.random()*5);
       setCourse(course[int]) 
    }
    const[course,setCourse] = useState("CSE");
    return (
      <div>
           <>
           <h1>Custom Hook</h1>
           <h1>{name}</h1>
            <h1>{id}</h1>
          <input type="text" placeholder='Enter your name' value={name}
          onChange={(e)=>SetName(e.target.value)}/>
           <input type="text" placeholder='Enter your id' value={id}
          onChange={(e)=>SetID(e.target.value)}/>
      </>
         <> <h1>UseReducer Hook {State.Count}</h1>
          <button onClick={()=>dispatch({type: 'increase'})}>Increase</button>
           <button onClick={()=>dispatch({type: 'decrease'})}>Decrease</button>
          <input type='number' value={State.Count}
            onChange={(e)=>dispatch({type: 'input', value: Number(e.target.value)})}/>
         </>
          <><h1>Use Memo</h1>
<input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>   
  <h2>Cube of the number:{result}</h2>   
  <button onClick={()=>{setCounter(counter+1)}}> Counter++ </button>
  <h2>Counter:{counter}</h2>
  <Callhead newFunction={newFunction}/>
  <h1>UseCallback: {count}</h1>
  <button onClick={()=>{setCount(count+1)}}> Click Here! </button>
  </>
    <UserProvider> <h1>Context API</h1>
      <> <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
      </>
      <Useref /> <br></br>
    <br></br>
    <Additem 
    // newdept={newdept}
    //         setNewDept={setNewDept}
    //         handleAddItem={handleAddItem} 
            /> <br></br>
          
      <Searchitem 
      // Search={Search}
      //       setSearch={setSearch} 
            />
      
       {/* {isLoading && <p>Loading Items.....</p>}
      {fetchError && <p>{`Error: ${fetchError}`}</p>} 
    
     {!isLoading && !fetchError && 
     <Header title ='React Js Todo List'
            depts={depts.filter(dept=>((dept.dept).toLowerCase()).includes((Search).toLowerCase()))}
      // handleChanges={handleChanges}
      // handleDelete={handleDelete} 
      /> }   */}
           

           <HeaderRenderer/>
            <p>We Have Successfully completed BE-{course} Degree</p>
             <button onClick={ ()=>Departments()}>Branches!</button>
            <Content />
            <Footer 
            //  length={depts.length}
            /></UserProvider>
        </div>
    )
 }

 
 export default Apply
 