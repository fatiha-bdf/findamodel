import React, {useState, useEffect} from 'react';
import BeautyStars from 'beauty-stars';


export default function Rate() {
	const [variable, setVariable] = useState(2);
	const onchange = e => {
		setVariable(e)
	}
	const initVariable = e => {
		setVariable(variable)
		console.log('kajshdkajhdlka')
	}
	return (
	<div className='rate'>
		<BeautyStars
			value={variable}
			onChange={onchange}
			inactiveColor = 'white'
			activeColor = 'gold'
			size = '18px'
		/>
		{/* {variable}/5 */}
	</div>
  );
}
