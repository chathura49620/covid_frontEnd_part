import React, { Component } from "react";
import axios from "axios";
import { Modal} from "react-bootstrap";
import Swal from 'sweetalert2'

export default class AddHelp_guaidModal extends Component {
    constructor(props) {
        super(props);
        this.state ={
            link:'',
            description:'',
        }
    }
    async handleFormSubmit(event){
        event.preventDefault();
        let link = this.state.link,
            description = this.state.description;
        try{
            let user_email = localStorage.getItem("user_email")
            if (user_email){
                const res = await axios.post('http://localhost:8000/api/create-posts/'+ user_email,{
                    link,
                    description
                });
                window.location.reload(false);
                if(res.data === "Done"){
                    alert("Done")
                }
                if (res.data === "Fails"){
                    alert("Error")

                }
            }
            else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Please Sign in first',
                    icon: 'error',
                    confirmButtonText: 'OK'})
            }
        }catch (err){
            console.log("error occurred")
        }
    }
    handleChecked(){
        this.setState({isChecked: !this.state.isChecked})
    }
    render() {
        const {link,description} = this.state;
        return (
            <Modal.Dialog
                {...this.props} className="w-100">
                <Modal.Header closeButton>
                    <Modal.Title>Add Help</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={event => this.handleFormSubmit(event)}>
                        <div className="form-group">
                            <label>Link</label>
                            <input
                                name="link"
                                type="text"
                                className="form-control"
                                placeholder="Enter link"
                                value={link}
                                onChange={ event => this.setState({link: event.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea
                                name="description"
                                type="text"
                                className="form-control"
                                placeholder="Enter password"
                                value={description}
                                onChange={ event => this.setState({description: event.target.value})}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mb-5">Add</button>
                    </form>
                </Modal.Body>
            </Modal.Dialog>
        );
    }
}