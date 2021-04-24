import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Container, Row} from 'reactstrap';

// Components
import SearchNav from './searchNavComponent';
import Title from './titleComponent';
import FeaturedBooks from './featuredBooksComponent';
import Sections from './sectionsComponent';

import { FEATURED } from '../shared/featuredBooks';

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <SearchNav />
                    <Title />
                    <FeaturedBooks featured={FEATURED}/>
                    <Container fluid="true">
                        <Row className="spacer"></Row>
                    </Container>
                    <Sections />
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;
