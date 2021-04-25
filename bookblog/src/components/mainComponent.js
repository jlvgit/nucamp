import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container, Row } from 'reactstrap';

// Components
import SearchNav from './searchNavComponent';
import Title from './titleComponent';
import FeaturedBooks from './featuredBooksComponent';
import CategoryLinks from './categoryLinksComponent';
import SectionComponent from './sectionComponent';

import { FEATURED } from '../shared/featuredBooks';
import { SECTIONS } from '../shared/featuredSections';

class Main extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<SearchNav />

					<Title />

					<FeaturedBooks featured={FEATURED} />

					<Container fluid={true}>
						<Row className="spacer" />
					</Container>

					<CategoryLinks />

					<SectionComponent section={SECTIONS[0]} />

					<Container fluid={true}>
						<a href="#">
							<h2 class="article-heading abril m-5">
								We got awarded an award. Help us find a place to put it, we don't have any space.
							</h2>
						</a>
					</Container>

					<SectionComponent section={SECTIONS[1]} reversed={true} />
				</div>
			</BrowserRouter>
		);
	}
}

export default Main;
