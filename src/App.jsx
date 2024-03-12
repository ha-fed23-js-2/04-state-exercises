// import { useState } from 'react'

import './App.css'
import Counter from './components/Counter.jsx'

function App() {
	// const [count, setCount] = useState(0)

	return (
		<main>
			<h1> State exercises </h1>
		
			<div>
				<Counter />
				<Counter />
				<Counter />
			</div>

		</main>
	)
}

export default App
