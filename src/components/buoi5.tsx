import React,
 { useState } from 'react'

const Buoi5 = () => {
  interface IProduct  {
    id: number
    name: String
    price: number
  }
  const arrayProduct = [
    { id :1 , name: 'ipad' , price: 2000},
    { id :2 , name: 'ipad2' , price: 1500},
    { id :3 , name: 'ipad3', price: 3000},
  ]
    const[products, setProducts] = useState<IProduct[]>(arrayProduct); 
    
  return (
    <div>
    
      {products.map((product, index) =>{
      return (
        <div key={index}>
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
        </div>
      )
    }
      
      )}
      </div>
  )
}

export default Buoi5
