import React from "react";
import { Button, Form, Row, Col, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import API from "../../utils/API";
import { Popup } from './Popup';

export class Signup extends React.Component {
    showModal = e => {
        this.setState({
            popupShow: !this.state.popupShow
        });
    };
    state = {
        email: "",
        password: "",
        cpassword: "",
        nom: "",
        prenom: "",
        adresse: "",
        codepostal: "",
        ville: "",
        numtel: "",
        popupShow: false
    };
    send = async () => {
        const { email, password, cpassword, nom, prenom, adresse, codepostal, ville, numtel, popupShow } = this.state;
        if (!email || email.length === 0) { return }
        else if (!password || password.length === 0 || password !== cpassword) return;
        else if (!nom || nom.length === 0) { return }
        else if (!prenom || prenom.length === 0) return;
        else if (!adresse || adresse.length === 0) return;
        else if (!codepostal || codepostal.length !== 5) return;
        else if (!ville || ville.length === 0) return;
        else if (!numtel || numtel.length <= 10) return;
        else {
            try {
                const { data } = await API.signup({ email, password });
                localStorage.setItem("token", data.token);
                window.location = "/";
            } catch (error) {
                console.error(error);
            }
        }
    };
    send2 = async () => {
        const { email, password, cpassword, nom, prenom, adresse, codepostal, ville, numtel, popupShow } = this.state;
        if (!email || email.length === 0) {
            //this.setState({ popupShow: true })
        }
        else if (!password || password.length === 0 || password !== cpassword) return;
        else if (!nom || nom.length === 0) {
            //this.setState({ popupShow: true })
        }
        else if (!prenom || prenom.length === 0) return;
        else if (!adresse || adresse.length === 0) return;
        else if (!codepostal || codepostal.length !== 5) return;
        else if (!ville || ville.length === 0) return;
        else if (!numtel || numtel.length <= 10) return;
        else {
            try {
                const { data } = await API.signup({ email, password });
                localStorage.setItem("token", data.token);
                window.location = "/";
            } catch (error) {
                console.error(error);
            }
        }
    };
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };
    render() {
        const { email, password, cpassword, nom, prenom, adresse, codepostal, ville, numtel, popupShow } = this.state;
        let popupClose = () => this.setState({ popupShow: false });
        console.log("*****popupShow*******", popupShow)
        return (
            <article className="active" >
                <div className="Login">
                    <Form>
                        <Row>
                            <Col md={6}>
                                <FormGroup controlId="email">
                                    <ControlLabel>Email</ControlLabel>
                                    <FormControl autoFocus type="email" placeholder="Entrez votre email" value={email} onChange={this.handleChange} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup controlId="password">
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl type="password" placeholder="Entrez votre Password" value={password} onChange={this.handleChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                            </Col>
                            <Col md={6}>
                                <FormGroup controlId="cpassword">
                                    <ControlLabel>Confirmation Password</ControlLabel>
                                    <FormControl type="password" placeholder="Confirmation de Password" value={cpassword} onChange={this.handleChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup controlId="nom">
                                    <ControlLabel>Nom</ControlLabel>
                                    <FormControl type="text" placeholder="Entrez votre nom" value={nom} onChange={this.handleChange} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup controlId="prenom">
                                    <ControlLabel>Prénom</ControlLabel>
                                    <FormControl type="text" placeholder="Entrez votre prénom" value={prenom} onChange={this.handleChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup controlId="numtel">
                            <ControlLabel>Numéro de téléphone</ControlLabel>
                            <FormControl type="text" placeholder="Entrez votre N° de téléphone" value={numtel} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup controlId="adresse">
                            <ControlLabel>Adresse</ControlLabel>
                            <FormControl type="text" placeholder="Entrez votre  N° Rue + Adresse" value={adresse} onChange={this.handleChange} />
                        </FormGroup>
                        <Row>
                            <Col md={6}>
                                <FormGroup controlId="codepostal">
                                    <ControlLabel>Code Postal</ControlLabel>
                                    <FormControl type="text" placeholder="Entrez votre code postal" value={codepostal} onChange={this.handleChange} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup controlId="ville">
                                    <ControlLabel>Ville</ControlLabel>
                                    <FormControl type="text" placeholder="Entrez votre ville" value={ville} onChange={this.handleChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button className="waves-effect waves-light btn pink remove" onClick={this.send}>S'inscrire</Button>
                        <Button className="waves-effect waves-light btn pink remove" onClick={e => { this.showModal(e); }} >Pop</Button>
                        <Popup show={this.state.popupShow} onClose={this.showModal} />
                    </Form>
                </div>
            </article>
        );
    }
}