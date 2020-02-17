import React, { Component } from 'react';
import { FormControl, ControlLabel } from "react-bootstrap";
import API from "../utils/API";

const state = {
    //email: localStorage.getItem("email"),
    email: "choupy4906@hotmail.fr",
    nom: "",
    prenom: "",
    adresse: "",
    codepostal: "",
    ville: "",
    numtel: "",
    date: ""
};
API.getUserbyEmail("choupy4906@hotmail.fr").then(response => {
    console.log(state.email)
    console.log("***********")
    console.log(response.data.data)
    console.log("***********")
})
    .catch(error => {
        console.log(error.response.data)
    })
    

export class Profil extends Component {   
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });};

    render() {
        console.log(state.email)
        return (
            <article>
                <h3>Vous pouvez retrouver vos informations personnelles : </h3>
                <div>
                <ControlLabel>Date click&collect</ControlLabel>
                <FormControl  type="datetime-local" value={state.data} onChange={this.handleChange}/>
                    <table>
                        <tbody>
                            <tr>
                                <td><h5>Email : </h5></td>
                                <td>alex@test.fr</td>
                                <td><h5>Numéro de téléphone :</h5></td>
                                <td>0601906000</td>
                            </tr>
                            <tr>
                                <td><h5>Nom :</h5></td>
                                <td>Dion</td>
                                <td><h5>Adresse :</h5></td>
                                <td>8Bis rue du commerce
                                <br></br>49100 ANGERS
                            </td>
                            </tr>
                            <tr>
                                <td><h5>Prénom :</h5></td>
                                <td>Alexandra</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </article>
        );
    }
}
export default Profil;