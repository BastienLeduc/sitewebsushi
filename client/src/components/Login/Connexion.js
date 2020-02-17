import React, { Component } from 'react';
import API from "../../utils/API";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Popup } from '../Popup';

export class Connexion extends Component {
    popupShow = e => {
        this.setState({
            show: !this.state.show
        });
    };
    state = {
        email: "",
        password: "",
        msg_erreur: "",
        show: false
    };
    send = async () => {
        const { email, password } = this.state;
        if (!email || email.length === 0) {
            return;
        }
        if (!password || password.length === 0) {
            return;
        }
        API.login(email, password).then(response => {
            console.log(response)
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("email", email);
            window.location = "/";
        })
            .catch(error => {
                console.log(error.response.data)
                this.state.msg_erreur = error.response.data.text;
                this.setState({ show: !this.state.show});
            })


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
                    <Popup show={this.state.show} onClose={this.popupShow}>{this.state.msg_erreur}</Popup>
                    <button className="waves-effect waves-light btn pink remove" onClick={this.send}  >Connexion</button>
                    <button className="waves-effect waves-light btn pink remove" onClick={this.singup} >S'inscrire</button>

                </div>

            </article >
        );
    }
}
export default Connexion;