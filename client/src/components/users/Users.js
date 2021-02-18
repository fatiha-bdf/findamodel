import React, { Fragment, useEffect, useContext} from 'react'
import UsersContext from '../../context/users/UsersContext'
import Spinners from '../layout/Spinners'
import UserItem from './UserItem'
import { CardColumns } from 'react-bootstrap';
import '../../App.css';

const Users = () => {
	const context = useContext(UsersContext)
	const {loading, users} = context
	// const models = users.filter(user => user.type == 'Model')
	if (loading) {
		return <Spinners />
	}
	else {
		return (
			<Fragment >
				<CardColumns className = 'list'>
					{users.map(user => (
						<div>
							<UserItem key={user.id} user={user} />
						</div>
					))}
				</CardColumns>
			</Fragment>
		)
	}
}

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat (3, 1fr)',
	gridGap: '2rem'
}

export default Users;
