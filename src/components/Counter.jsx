import { useState } from 'react'

const Counter = () => {
	const [count, setCount] = useState(0)

	const addOne = () => { setCount(count + 1) }
	const addFive = () => { setCount(count + 5) }

	return (
		<div className="frame">
			<button onClick={addOne}> +1 </button>
			<button onClick={addFive}> +5 </button>
			Du har klickat {count} gånger.
		</div>
	)
}

export default Counter
