import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, Input, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const SearchNav = () => {
	const [ isOpen, setIsOpen ] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar light expand="md">
				<NavbarBrand href="#">
					<FontAwesomeIcon icon={faSearch} />
					<FormGroup className="searchInput">
						<Input type="search" name="search" id="exampleSearch" placeholder="Search..." />
					</FormGroup>
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="#">HOME</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">BOOKS</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">RECOMMENDATIONS</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">ABOUT</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default SearchNav;
