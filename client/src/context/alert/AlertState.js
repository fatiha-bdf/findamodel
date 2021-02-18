import React, { useReducer } from 'react'
import uuid from 'uuid'
import AlertContext from './AlertContext'
import AlertReducer from './AlertReducer'
import {
	CREATE_ALERT,
	REMOVE_ALERT
} from '../types'

const AlertState = props => {
	const initialState = []
	const [state, dispatch] = useReducer(AlertReducer, initialState)

	const createAlert = (msg, type, timeout = 4000) => {
		const id = uuid.v4()
		dispatch ({
			type: CREATE_ALERT,
			payload: { msg, type, id }
		})
		setTimeout(() => dispatch ({ type: REMOVE_ALERT, payload: id }), timeout); //set it back to null
	}

	return <AlertContext.Provider
		value = {{
			alerts: state,
			createAlert
		}}>
		{props.children}
	</AlertContext.Provider>
}

export default AlertState
