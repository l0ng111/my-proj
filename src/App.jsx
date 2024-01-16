/*import React from 'react';
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

export default App*/
import './App.css';

import  { useState } from 'react';

import Trial from './components/trial';

// biến: let, const
// let count = 0;
// count = 1;
// const count = 0;
// count = 1; => sai

function App() {
	const data = [
		{
			id: 1,
			name: 'Nguyen Van A',
			age: 23,
		},
		{
			id: 2,
			name: 'Nguyen Van B',
			age: 23,
		},
	];
	
	const [arrayData, setArrayData] = useState(data);
 // const [arrayStorage, setArrayStorage] = useState("")
	const handleClick = (id) => {
   
		const newData = arrayData.filter((value) => {
			if (id !== value.id) {
				console.log(id);
				return id;
			} 
		});
    //
    console.log('____', id)
    //data = [a,newData]; let a = arrayStorage; 
		setArrayData(newData);

	};

	// function () {}
	// const func2 = () => {}

	const addUser = () => {
		arrayData;
  
		const newUser = {
			id: 3,
			name: 'Nguyen Van C',
			age: 23,
		};
		const newArrayData = [...arrayData, newUser];
		setArrayData(newArrayData);
	};

	const handleUpdateUser = (id) => {
		// find
		const userInfo = arrayData.find((value/*, index*/) => value.id === id);
		userInfo.name = userInfo.name + ' Update';

		// map
		const newData = arrayData.map((value/*, index*/) => {
			if (value.id === id) {
				return userInfo;
			}
			return value;
		});
		setArrayData(newData);
	};

	return (
		<div>
			<div>
				<form action="">
					<input type="text" placeholder='Name' className='h-screen flex justify-center items-center' />
				</form>
			</div>
			<div
				onClick={() => addUser()}
				className="mt-4 py-2 px-4 border border-gray-500 rounded"
			>
				Thêm
			</div>

			<div className="h-screen flex items-center justify-center">
				{/* <div className="flex flex-col">
					<div className="w-[300px] mx-auto">Count: {count}</div>
					<div className="flex gap-4 justify-center">
						<button className="mt-4 py-2 px-4 border border-gray-500 rounded">
							Giảm
						</button>
						<button className="mt-4 py-2 px-4 border border-gray-500 rounded">
							Tăng
						</button>
					</div>
  </div> */}
				<div className="flex flex-col justify-center items-center gap-3">
					{arrayData.map((value, index) => {
						return (

							<div key={index} className="flex items-center gap-3">
								<h2 className="">{value.name}</h2> -<h2>{value.age}</h2>
								<div
									onClick={() => handleClick(value.id)}
									className="mt-4 py-2 px-4 border border-gray-500 rounded"
								>
									xóa
								</div>
								<div
									onClick={() => handleUpdateUser(value.id)}
									className="mt-4 py-2 px-4 border border-gray-500 rounded"
								>
									Sửa
								</div>
								<div onChange={(event) => setArrayData(event.target.value) }
								>
									Sửa 2
								</div>
								<div 
								className='mt-4 py-2 px-4 border border-gray-500 rounded'>
                                    <Trial/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);

}

export default App; 