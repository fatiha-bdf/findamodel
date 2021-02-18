import {
	SHOW_LOADER,
	CLEAR_ERRORS,
	GET_USER,
	SEARCH_USERS
} from '../types'

 export default (state, action) => {
	switch(action.type) {
		case SHOW_LOADER:
		return {
			...state,
			loading: true
		}
		case GET_USER:
		return {
			...state,
			selectedUser: action.payload,
			loading: false
		}
		case SEARCH_USERS:
		return {
			...state,
			users: action.payload,
			loading: false,
			search: true
		}

		case CLEAR_ERRORS:
		return {
			...state,
			error: null ,
		}
		default:
			return state
	}
 }
