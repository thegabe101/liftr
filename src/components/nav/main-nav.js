import { NavLink } from 'react-router-dom'
import React from 'react'

const MainNav = () => (
	<div className='navbar-nav mr-auto'>
		<NavLink
			to='/'
			exact
			className='nav-link'
			activeClassName='router-link-exact-active'
		>
			Home
		</NavLink>
		<NavLink
			to='/profile'
			exact
			className='nav-link'
			activeClassName='router-link-exact-active'
		>
			Profile
		</NavLink>
		<NavLink
			to='/workouts'
			exact
			className='nav-link'
			activeClassName='router-link-exact-active'
		>
			Workouts
		</NavLink>
		<NavLink
			to='/external-api'
			exact
			className='nav-link'
			activeClassName='router-link-exact-active'
		>
			External API
		</NavLink>
		<NavLink
			to='/calendar'
			exact
			className='nav-link'
			activeClassName='router-link-exact-active'
		>
			Calendar
		</NavLink>
	</div>
)

export default MainNav
