import React from "react";
import { Button, Form, Row, Col, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import API from "../../utils/API";
import { PopupErreur } from '../PopupErreur';

export class Signup extends React.Component {
    popupShow = e => {
        this.setState({
            show: !this.state.show
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
        msg_erreur: "",
        show: false
    };
    verifMail = a => {
        // On ouvre la fonction en lui envoyant la contenu du champ
        let testm = false;
        //la on spécifie que l'adresse est false (fausse) dès le début. Cela permet de pouvoir dire que si rien n'est entré dans le champ l'adresse est fausse.
        for (var j = 1; j < (a.length); j++) {
            //Ici, ouverture d'une boucle for à 1 qui permettra de tester du premier jusqu'au dernier caractère de l'adresse e-mail entrée.
            if (a.charAt(j) === '@') {
                // La on commence les conditions de tests. Ici on cherche l'@
                if (j < (a.length - 4)) {
                    // Ici on regarde si il y a bien 4 caractère après le @
                    for (var k = j; k < (a.length - 2); k++) {
                        //on ouvre une seconde boucle pour
                        if (a.charAt(k) === '.') testm = true;
                        //on vérifie qu'il y ai bien un point et on met la variable testm à true (implicitement si toutes les conditions sont remplies) puis on ferme les conditions et boucles
                    }
                }
            }
        }
        return testm
    };
    send = async () => {
        const { email, password, cpassword, nom, prenom, adresse, codepostal, ville, numtel } = this.state;
        if (!email || email.length === 0 || !this.verifMail(email)) {
            this.state.msg_erreur = "L'email saisi est invalide. Mettre :   " + email + "  sous la forme __@_._"
            this.setState({
                show: !this.state.show
            });
        }
        else if (!password || password.length === 0 || password !== cpassword) {
            this.state.msg_erreur = "Le password saisi est invalide ou est différent de celui de confirmation"
            this.setState({
                show: !this.state.show
            });
        }
        else if (!nom || nom.length === 0) {
            this.state.msg_erreur = "Le nom saisi est invalide"
            this.setState({
                show: !this.state.show
            });
        }
        else if (!prenom || prenom.length === 0) {
            this.state.msg_erreur = "Le prénom saisi est invalide"
            this.setState({
                show: !this.state.show
            });
        }
        else if (!adresse || adresse.length === 0) {
            this.state.msg_erreur = "L'adresse saisie est invalide"
            this.setState({
                show: !this.state.show
            });
        }
        else if (!codepostal || codepostal.length !== 5 || isNaN(codepostal)) {
            this.state.msg_erreur = "Le code postal saisi est invalide, il doit comporter 5 chiffres"

            this.setState({
                show: !this.state.show
            });
        }
        else if (!ville || ville.length === 0) {
            this.state.msg_erreur = "La ville saisie est invalide"
            this.setState({
                show: !this.state.show
            });
        }
        else if (!numtel || numtel.length <= 9 || isNaN(numtel)) {
            this.state.msg_erreur = "Le numéro de téléphone saisi est invalide, il doit comporter au moins 10 chiffres sous la forme 0X XX XX XX XX"
            this.setState({
                show: !this.state.show
            });
        }
        else {
            API.signup({ email, password, nom, prenom, adresse, codepostal, ville, numtel }).then(response => {
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
        }
    };
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };
    render() {
        const { email, password, cpassword, nom, prenom, adresse, codepostal, ville, numtel } = this.state;

        return (
            <article className="active" >
                <div className="Login">
                    <Form>
                        <div className="row">
                            <div className="col">
                                <FormGroup controlId="email">
                                    <ControlLabel>Email</ControlLabel>
                                    <FormControl autoFocus type="email" placeholder="Entrez votre email" value={email} onChange={this.handleChange} />
                                </FormGroup>
                            </div>
                            <div className="col">
                                <FormGroup controlId="password">
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl type="password" placeholder="Entrez votre Password" value={password} onChange={this.handleChange} />
                                </FormGroup>
                            </div>
                        </div>
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
                        <br></br>
                        <PopupErreur show={this.state.show} onClose={this.popupShow}>{this.state.msg_erreur}</PopupErreur>
                        <Button className="waves-effect waves-light btn pink remove" onClick={this.send}>S'inscrire</Button>
                    </Form>
                </div>
            </article>
        );
    }
}