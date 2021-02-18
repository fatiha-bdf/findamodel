import React, { Fragment, useEffect, useContext} from 'react' //useEffect to be able to use componentDidMount
import Spinner from '../layout/Spinners'
import { Link } from 'react-router-dom'
import UsersContext from '../../context/users/UsersContext'
import '../../App.css';
import avatar from '../../photos/avatar.jpg';
import { Card, Button, ButtonToolbar} from 'react-bootstrap';
import bgimg from '../../photos/bgimg.png'
import Rate from './Rate'

const User = ({ match }) => {
	const context = useContext(UsersContext)

	useEffect(() => {
		const name = match.params.name  // pull from url
		context.getUser(name)
		// eslint-disable-next-line
	},[])

	const {name, image, type} = context.selectedUser
	console.log(name);
	if (context.loading) {
		return <Spinner />
	}
	else {
		return (
			<div>
				<img className='mainvideo' src ={bgimg} alt='' />
				<div className = 'form-container'>
					<div className = 'profile'>
						<div className= 'nameimg'>
							<div>
								<img variant="top" src={`https://i.mdel.net/i/db/${image}`} style={{width: 150, height: 150, borderRadius: 150/2}}/>
							</div>
							<br/>
							<div>
								<h3>{name}</h3><p>{type}</p>
							</div>
							<br/>
							<div>
								<Rate/>
							</div>
						</div>
						<br/>
						<div className = 'note'>
								<h1>Comment here</h1>
						</div>
					</div>
						<Button variant="secondary" href={`/`}>Back to Search</Button>{' '}
				</div>
			</div>
		)
	}
}

export default User
