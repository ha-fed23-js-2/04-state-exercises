// import { useState } from 'react'

import './App.css'
import ButtonMarker from './components/ButtonMarker.jsx'
import Counter from './components/Counter.jsx'
import ShowHide from './components/ShowHide.jsx'


function App() {
	// const [count, setCount] = useState(0)

	return (
		<main>
			<h1> State exercises </h1>

			<ButtonMarker />
		
			<div>
				<Counter />
				<Counter />
				<Counter />
			</div>

			<ShowHide />

		</main>
	)
}

export default App
