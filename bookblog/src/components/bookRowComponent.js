import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

import BookCard from './bookCardComponent'



class BookRow extends Component {
    render(){
        return (
            <Container>
                <Row>
                    <Col>
                        <BookCard></BookCard>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default BookRow;
