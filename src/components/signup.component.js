import React, { Component } from "react";
import Axios from "axios";
import axios from "axios";

export default class SignUp extends Component {
    state ={
        name:'',
        email:'',
        password:''
    }

    async handleFormSubmit(event){
        event.preventDefault();
        let name = this.state.name,
            email = this.state.email,
            password = this.state.password

        try{
            // axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
            // let token = document.head.querySelector('meta[name="csrf-token"]');
            // axios.defaults.headers['X-CSRF-TOKEN'] = token.content;



            // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
            const res = await axios.post('http://localhost:8000/api/register',{
                name,
                email,
                password,

            });
            console.log(res)
            if(res){
                this.props.history.push('/sign-in');
            }
        }catch (err){
            console.log("Error Occurred")
        }
    }
    render() {
        const {name,email,password} = this.state;
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">

            <form onSubmit={event => this.handleFormSubmit(event)}>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        onChange={ event => this.setState({name: event.target.value})}
                    />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={ event => this.setState({email: event.target.value})}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={ event => this.setState({password: event.target.value})}
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
            </div>
            </div>
        );
    }
}