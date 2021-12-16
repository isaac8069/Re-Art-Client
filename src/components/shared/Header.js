import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import logo from "./../homeComponents/images/logo.png"


const linkStyle = {
	color: 'white',
	textDecoration: 'none'
}
const authenticatedOptions = (
	<>
		<Nav.Link>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='profile' style={linkStyle}>
				Profile
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='available_art' style={linkStyle}>
				Art
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='subscription' style={linkStyle}>
				Plans
			</Link>
		</Nav.Link>
	</>
)

const unauthenticatedOptions = (
	<>
		<Nav className="justify-content-end">
			<Nav.Link>
				<Link to='sign-up' style={linkStyle}>
					Register
				</Link>
			</Nav.Link>
			<Nav.Link>
				<Link to='sign-in' style={linkStyle}>
					Sign In
				</Link>
			</Nav.Link>
			<Nav.Link>
				<Link to='available_art' style={linkStyle}>
					Art
				</Link>
			</Nav.Link>
			<Nav.Link>
				<Link to='subscription' style={linkStyle}>
					Plans
				</Link>
			</Nav.Link>
		</Nav>
	</>
)


const alwaysOptions = (
	<>
		<Nav.Link>
			<Link to='/about' style={linkStyle}>
				About
			</Link>
		</Nav.Link>
	</>
)

const Header = ({ user }) => (
	<Navbar bg='dark' variant='dark' expand='md'>
		<Navbar.Brand>
			<Link to='/'  style={linkStyle}>
			<img src={logo} alt="Re-Art logo" width="300" height="100"></img>
			</Link>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{/* {user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)} */}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
