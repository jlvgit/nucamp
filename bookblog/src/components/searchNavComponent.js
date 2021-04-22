import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, Input, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Example = () => {
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

export default Example;

// import React from 'react';
// import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Col } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

// const toggleNavbar = () => false;

// function SearchNav(props) {
// 	return (
// 		<Container fluid="true">
// 			<NavbarBrand>
// 				<a href="#">
// 					<FontAwesomeIcon icon={faSearch} />
// 				</a>
// 			</NavbarBrand>

// 			<NavbarToggler onClick={toggleNavbar} className="mr-2" />

// 			<Collapse isOpen={true} navbar>
// 				<Navbar color="faded" light>
// 					<Nav navbar>
// 						<NavItem>
// 							<NavLink href="#">HOME</NavLink>
// 						</NavItem>
// 						<NavItem>
// 							<NavLink href="#">BOOKS</NavLink>
// 						</NavItem>
// 						<NavItem>
// 							<NavLink href="#">RECOMMENDATIONS</NavLink>
// 						</NavItem>
// 						<NavItem>
// 							<NavLink href="#">ABOUT</NavLink>
// 						</NavItem>
// 					</Nav>
// 				</Navbar>
// 			</Collapse>
// 		</Container>
// 	);
// }

// <div class="container-fluid">
// <div class="navbar-brand">
//     <a href="#" id="search">
//         <i class="fa fa-search"></i>
//     </a>

//     <div class="searchInput position-absolute">
//         <input type="text" placeholder="Search..." class="mt-3"/>
//     </div>
// </div>
// <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navDropdown" aria-controls="navDropdown" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
// </button>
// <div class="collapse navbar-collapse" id="navDropdown">
//     <ul class="navbar-nav">
//         <li class="nav-item">
//             <a class="nav-link active" aria-current="page" href="#">HOME</a>
//         </li>
//         <li class="nav-item">
//             <a class="nav-link" href="#">BOOKS</a>
//         </li>
//         <li class="nav-item">
//             <a class="nav-link" href="#">RECOMMENDATIONS</a>
//         </li>
//         <li class="nav-item">
//             <a class="nav-link" href="#">ABOUT</a>
//         </li>
//     </ul>
// </div>
// </div>

// export default SearchNav;
