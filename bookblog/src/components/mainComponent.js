import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

// Components
import SearchNav from './searchNavComponent';
import BookRow from './bookRowComponent';

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <SearchNav />
                    <BookRow />
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;
