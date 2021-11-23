import React from 'react';
import { Navbar, Container,Nav} from 'react-bootstrap';
const NavBar = () => {
	return (
		<div>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand href='/'>Petbook</Navbar.Brand>
					<Navbar.Brand href='/create'>Create</Navbar.Brand>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavBar;
