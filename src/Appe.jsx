// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function App() {
	const [todos, setTodos] = useState([
		{
			name: "Learn React",
		},
		{
			name: "Learn Firebase",
		},
	]);
	const [editIndex, setEditIndex] = useState(null);

return (
		<div className="my-4 flex flex-col gap-2">
			{todos.map((todo, index) => (
				<div key={index} className="p-4 border bg-slate- flex justify-between items-center">
					<p>{todo.name}</p>
					<button onClick={() => setEditIndex(index)} className="py-1 px-2 bg-yellow-100 rounded-lg border hover:bg-yellow-200">Edit</button>
				</div>
			))}
			{editIndex !== null && (
				<div className="fixed top-1/2 left-1/2 bg-slate-100 -translate-x-1/2 p-4 flex flex-col justify-center items-center gap-2 rounded-lg">
					<input
						type="text"
						value={todos[editIndex].name}
						onChange={(e) => setTodos((prev) => {
							const newTodos = [...prev];
							newTodos[editIndex].name = e.target.value;
							return newTodos;
						})}
					/>
					<button onClick={() => setEditIndex(null)} className="bg-green-200 hover:bg-green-300 px-2 rounded-lg">Submit</button>
					<button onClick={() => setEditIndex(null)} className="absolute top-0 right-0 bg-red-400 hover:bg-red-500 rounded-full font-bold w-6">X</button>
				</div>
			)}
		</div>
	);
}

export default App