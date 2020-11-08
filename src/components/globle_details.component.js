import React, { Component } from "react";
import { Card,Container,Row,Col } from 'react-bootstrap';
import {Switch} from "react-router-dom";

export default class Globle_details extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }

    }


    componentDidMount() {


    }
    render() {
        // const {covid_data} = this.state;
        return (
            <Container  className="card-wrapper" >
                <Row className="mb-5">
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>global_deaths</Card.Title>
                                <Card.Text>
                                    <h1>{this.props.global_deaths}</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>global_new_cases</Card.Title>
                                <Card.Text>
                                    <h1>{this.props.global_new_cases}</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>


                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>global_total_cases</Card.Title>
                                <Card.Text>
                                    <h1>{this.props.global_total_cases}</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>global_recovered</Card.Title>
                                <Card.Text>
                                    <h1>{this.props.global_recovered}</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>





        );
    }
}