import { useState } from 'react'

const ShowHide = () => {
	const [isVisible, setIsVisible] = useState(true)

	let visibility = isVisible ?
		{ visibility: 'visible' } :
		{ visibility: 'hidden' }

	const show = () => setIsVisible(true)
	const hide = () => setIsVisible(false)

	return (
		<div className="frame">
			<button onClick={show}> Visa </button>
			<button onClick={hide}> Dölj </button>
			<p style={visibility}> Jag ska växla mellan synlig och osynlig </p>
		</div>
	)
}

/*
Synlighet:
1. display: block / none
2. visibility: visible / hidden
3. opacity: 1 / 0
4. conditional rendering
*/

export default ShowHide
