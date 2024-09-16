import { useState } from 'react'
import './App.css'
import store from './Redux/Store'
import { fetchData , showData, showErr } from './Redux/Actions'



function App() {

  const [data,setData]=useState();

  store.subscribe(()=>{
    console.log(store)
    setData(store.getState().user)
  })


  return (
    <>
    {
      data && data.map((user)=>
        <div className='main-div' key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )
    }
      <button className='button' onClick={fetchData}>Fetch Data</button>
    </>
  )
}

export default App