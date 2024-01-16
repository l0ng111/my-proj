import //React,/
 { useState } from 'react'

const Trial = () => {
    const[a, Seta] = useState(""); 
    Seta(0)
  return (
    <div>trial {a}</div>
  )
}

export default Trial
