import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, Button, ButtonToolbar} from 'react-bootstrap';
import '../../App.css';
import avatar from '../../photos/avatar.jpg';

const UserItem = ({ user: {name, image, type} }) => {
	console.log(`https://i.mdel.net/i/db${image}`)
	return (
		<Fragment >
			<Card className = 'text-center'>
				<Card.Img variant="top" src={`https://i.mdel.net/i/db/${image}`} style={{width: 150, height: 150, borderRadius: 150/2}}/>
				<Card.Body>
					<Card.Title>{name}<p>{type}</p></Card.Title>
					<ButtonToolbar tyle={{textAlign: 'center'}}>
						<Button variant="secondary" href={`/user/${name}`}>PROFILE</Button>{' '}
					</ButtonToolbar>
				</Card.Body>
			</Card>
		</Fragment>
	)
}

UserItem.propTypes = {
	user: PropTypes.object.isRequired, //ptor
}


export default UserItem
