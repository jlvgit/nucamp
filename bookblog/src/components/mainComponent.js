import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

// Components
import SearchNav from './searchNavComponent';
import Title from './titleComponent';
import FeaturedBooks from './featuredBooksComponent';

import { FEATURED } from '../shared/featuredBooks';

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <SearchNav />
                    <Title />
                    <FeaturedBooks featured={FEATURED}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;
