import { useState } from 'react'

const ButtonMarker = () => {
	const [selected, setSelected] = useState(null)
	// selected kan vara: null, 1, 2, 3, 4
	const names = ['Ett', 'Två', 'Tre', 'Fyra', 'Fem', 'Sex', 'Sju']

	return (
		<div>
			{names.map((name, index) => (
				<button key={name}
					onClick={() => setSelected(index)}
					className={selected === index ? 'selected' : ''}
				> {name} </button>
			))}
		</div>
	)
	/*return (
		<div>
			<button onClick={() => setSelected(1)} className={selected === 1 ? 'selected' : ''}> Ett </button>
			<button onClick={() => setSelected(2)} className={selected === 2 ? 'selected' : ''}> Två </button>
			<button onClick={() => setSelected(3)} className={selected === 3 ? 'selected' : ''}> Tre </button>
			<button onClick={() => setSelected(4)} className={selected === 4 ? 'selected' : ''}> Fyra </button>
		</div>
	)*/
}

export default ButtonMarker
// export { x, y, z }  named exports
