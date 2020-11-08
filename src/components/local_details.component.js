import React, { Component } from "react";
import { Card,Container,Row,Col } from 'react-bootstrap';
import {Switch} from "react-router-dom";

export default class Local_details extends Component {

    constructor(props) {
        super(props);
        this.state ={
            username:'',
            password:'',
            isChecked:false
        }

    }


    componentDidMount() {
        console.log(this.props)

    }
    render() {
        // const {covid_data} = this.state;
        return (

            <Container  className="card-wrapper" >
                <h1>{this.props.global_deaths}</h1>
                <Row className="mb-5">
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>local_active_cases</Card.Title>
                                <Card.Text>
                                    <h1>{this.props.local_active_cases}</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>local_deaths</Card.Title>
                                <Card.Text>
                                    <h1>{this.props.local_deaths}</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>


                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>local_new_cases</Card.Title>
                                <Card.Text>
                                    <h1>{this.props.local_new_cases}</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>total_pcr_testing_count</Card.Title>
                                <Card.Text>
                                    <h1>{this.props.total_pcr_testing_count}</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>





        );
    }
}