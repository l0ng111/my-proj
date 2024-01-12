import React from 'react';
import { useEffect, useState } from 'react'
import './App.css'
const  App = () => { 
  const [title , setTitle] = useState('Nono')

  const handleClick = () => {
    return <div>{title}</div>
  }
useEffect(() => {
  console.log('daohuulong')
    const timer = setTimeout(() => {
      
      setTitle('yesno'+ Math.random())
    }, 1000)
    return () => clearTimeout(timer) 
}, [])
 
return (
  <div>
  <h1 className="text-red-500 text-2xl">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
  itaque!
  </h1>
  <p className="read-the-docs">
  Click on the Vite and React logos to learn more

  </p>
  <div>{title}</div>
   <button  onClick ={() => handleClick()} >Get init</button>
   </div>
   )
  
  
 
}

export default App
