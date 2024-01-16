import 

 { useState } from 'react'




const Button = () => {
    const [names, setNames] = useState("")
    const [plh, setPlh] =useState("None")
const handleChange = (event) => {setPlh(names) ; setNames([...names,event.target.value])}
 const handleEdit = () => {  }
  return (
    <div>
        <button onClick={()=>handleEdit()}>editToDO</button>
        <input
     type="text" 
     placeholder={plh}
     value={names}
    className='h-screen flex justify-center items-center'
    onChange={(event) => handleChange(event)}
     />  
     
        </div>

  )
}

export default Button