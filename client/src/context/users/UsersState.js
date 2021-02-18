import React, { useReducer } from 'react'
import axios from 'axios'
import UsersContext from './UsersContext'
import UsersReducer from './UsersReducer'




import {
	SHOW_LOADER,
	CLEAR_ERRORS,
	GET_USER,
	SEARCH_USERS
} from '../types'

const UsersState = props => {
	const initialState = {
		loading: false,
		error: null,
		formSent: '',
		alerts: [],
		users: [],
		Search: false,
		selectedUser: []
	}

	const [state, dispatch] = useReducer(UsersReducer, initialState)


	const searchUsers = async (text) => {
		// showLoader()
		const res = await axios.get(`https://api.models.com/prosearch/sitesearch19-json.html?mdcsearch=${text}`)
		dispatch ({
			type: SEARCH_USERS,
			payload: res.data.people // rechercher uniquement les personnes
		})
	}

	const getUser = async (name) => {
		// showLoader()
		const res = await axios.get(`https://api.models.com/prosearch/sitesearch19-json.html?mdcsearch=${name}`)
		dispatch ({
			type: GET_USER,
			payload: res.data.people[0]
		})
	}


	const showLoader = () => dispatch({ type: SHOW_LOADER })

	const clearErrors = () => dispatch ({ type: CLEAR_ERRORS })


	return <UsersContext.Provider  // values i can use outside when i do "context."
		value = {{
			loading: state.loading,
			error: state.error,
			alerts: state.alerts,
			users: state.users,
			selectedUser: state.selectedUser,
			Search: state.Search,
			clearErrors,
			getUser,
			searchUsers,
		}}>
		{props.children}
	</UsersContext.Provider>
}

export default UsersState
