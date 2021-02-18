import React, { useContext } from 'react'
import { Alert } from 'react-bootstrap'
import AlertContext from '../../context/alert/AlertContext'

const Alerts = () => {
	const alertContext = useContext(AlertContext)
	const alerts = alertContext.alerts
	return (
		alerts.length > 0 &&
		<div key={alerts[0].id} >
			<Alert variant={alerts[0].type}>
				<p>{alerts[0].msg} </p>
			</Alert>
		</div>
	)
}

export default Alerts
