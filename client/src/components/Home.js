import React from 'react'
import Search from './users/Search';
import Users from './users/Users';
import '../App.css';
import bgimg from '../photos/bgimg.png'

const Home = () => {

	return (
		<div className = 'hero-container'>
		<img className='mainvideo' src ={bgimg} alt='' />
			<Search />
			<Users />
		</div>
	)
}

export default Home;
