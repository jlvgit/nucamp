import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function BookPage() {
	return (
		<Container fluid={true}>
			<Row className="m-3 m-sm-5">
				<Col>
					<h3>Books</h3>
				</Col>
			</Row>

		</Container>
	);
}

export default BookPage;
