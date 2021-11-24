import React from 'react';
import { Navbar, Container,Button} from 'react-bootstrap';
import Auth from '../components/Auth/Auth'
const NavBar = () => {
	return (
		<div>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand href='/'>Petbook</Navbar.Brand>
					<Button><Auth/></Button>
					<Navbar.Brand href='/create'>Create</Navbar.Brand>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavBar;
