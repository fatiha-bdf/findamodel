import React from 'react'
import { Spinner } from 'react-bootstrap'

const Spinners = (props) => {
	return (
		<>
			<Spinner animation="border" size="sm" />
			<Spinner animation="border" />
			<Spinner animation="border" size="lg" />
			<Spinner animation="grow" size="sm" />
			<Spinner animation="grow" />
			<Spinner animation="grow"  size="lg" />
		</>
	)
}

export default Spinners
