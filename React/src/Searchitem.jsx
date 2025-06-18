import React from 'react'
import './App.css'
import { useUser } from './DataContext'


const Searchitem = () => {
  const {Search,setSearch} = useUser();
  return (
    <form className='searchForm' onSubmit={(e)=> e.preventDefault()}>
        <label>Search</label>
        <input id='search' type='text' role='searchbox' placeholder='search Items' 
        value={Search} onChange={(e)=>setSearch(e.target.value)} />
    </form>
  )
}

export default Searchitem
// {Search,setSearch}