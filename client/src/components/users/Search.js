import React, { useState, useContext } from 'react' //rce // bringing the useState hook
// import Alerts from './components/layout/Alerts';
import UsersContext from '../../context/users/UsersContext' /// bring context
import AlertContext from '../../context/alert/AlertContext' /// bring context
import { Form, Col, Row, Button } from 'react-bootstrap'
import '../../App.css';

const Search = () => {
	const usersContext = useContext(UsersContext) // initialise it
	const alertContext = useContext(AlertContext) // initialise it

	const showClear = usersContext.search
	const [text, setText] = useState('') // I CREATED the text state // j'en ai besoin que ici docn je la met pas dans context
	const onChange = e => setText( e.target.value )
	const onSubmit = (e) => { // add const if i wanna hve a function inside a function
		e.preventDefault();
		if(text === '') {
			alertContext.createAlert('please enter something', 'danger')
		}
		else {
			usersContext.searchUsers(text)  // use function in context: no need to get it from a prop anymore
			setText('')
		}
	}
	return (
		<Form className = 'form-container' onSubmit={onSubmit}>
			{/* <Alerts /> */}
			<Form.Group controlId="text">
				<Form.Control type="text" placeholder="Search" required
				minLength={2} name='text' value={text} onChange={onChange} />
			</Form.Group>
			<Button variant="success" type="submit" value='search'>
				Search
			</Button>
				{showClear && <Button variant="success" type="submit" value='search' onClick={usersContext.clearUsers}>
				Clear Search
			</Button>}
		</Form>
	)
}

export default Search

