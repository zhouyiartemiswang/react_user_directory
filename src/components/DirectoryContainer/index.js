import React, { Component } from 'react';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import Search from '../Search';

export default class DirectoryContainer extends Component {
    render() {
        return (
            <Container>
                <Row>
                    {/* Search */}
                    <Col size="md-6">
                        <Search>

                        </Search>

                    </Col >
                    {/* Sort */}
                    <Col size="md-6">

                    </Col>
                </Row>

            </Container>
        );
    }
}
