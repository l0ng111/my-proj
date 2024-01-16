import 

 { useState } from 'react'




const Button = () => {
    const [names, setNames] = useState("")
    
const handleChange = (event) => { setNames([...names,event.target.value])}
 const handleEdit = () => {  }
  return (
    <div>
        <button onClick={()=>handleEdit()}>editToDO</button>
        <input
     type="text" 
     placeholder='None'
    className='h-screen flex justify-center items-center'
    onChange={(event) => handleChange(event)}
     />  
     
        </div>

  )
}

export default Button