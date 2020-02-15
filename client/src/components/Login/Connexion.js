import React, { Component } from 'react';
import API from "../../utils/API";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export class Connexion extends Component {
    state = {
        email: "",
        password: ""
    };
    send = async () => {
        const { email, password } = this.state;
        if (!email || email.length === 0) {
            return;
        }
        if (!password || password.length === 0) {
            return;
        }
        try {
            const { data } = await API.login(email, password);
            localStorage.setItem("token", data.token);
            window.location = "/";
        } catch (error) {
            console.error(error);
        }
    };
    singup = (event) => {
        window.location = "/signup";
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };
    render() {
        const { email, password } = this.state;
        return (
            <article className="active" >
                <div className="Login">
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl autoFocus type="email" value={email} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl value={password} onChange={this.handleChange} type="password" />
                    </FormGroup>
                    <button className="waves-effect waves-light btn pink remove" onClick={this.send}  >Connexion</button>
                    <button className="waves-effect waves-light btn pink remove" onClick={this.singup} >S'inscrire</button>

                </div>

            </article >
        );
    }
}
export default Connexion;