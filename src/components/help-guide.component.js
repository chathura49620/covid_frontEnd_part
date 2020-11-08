import React, { Component } from "react";
import {Card, Container, Row,Col} from "react-bootstrap";
import AddHelp_guaidModal from "./AddHelp_guaidModal";
import axios from "axios";

export default class HelpGuide extends Component {
    constructor(props) {
        super(props);
        this.state ={
            addModalShow: false,
            posts:[]
        }
    }

    async componentDidMount() {
        try{
            const res = await axios.get('http://localhost:8000/api/all-posts');

            this.setState({ posts: res.data });
            console.log(this.state.posts)
        }catch (err){
            console.log("error occurred")
        }
    }

    render() {
        const { posts } = this.state;
        return (

            <Container>
                <Row className="mt-5">
                    <AddHelp_guaidModal />
                </Row>
                {posts.map(post =>
                <Row className="mt-5">
                    <Card className="bg-white w-75 h-100">
                        <Row>
                            <Col>
                                {/*{ user_ob = post.id - 1  }*/}
                                user name:-{post.user.name}
                            </Col>
                            <Col className="float-left">
                                email:-{post.user.email}
                            </Col>
                        </Row>
                        <b>link </b> <p>{post.link}</p>
                               <b>Description</b> <p>{post.description}</p>
                    </Card>
                </Row>
                )}

            </Container>

        );
    }
}