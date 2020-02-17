import React, { Component } from 'react';
import API from "../utils/API";

const state = {
    email: localStorage.getItem("email"),
    nom: "",
    prenom: "",
    adresse: "",
    codepostal: "",
    ville: "",
    numtel: "",
};
console.log("profil email: "+ state.email)
API.getUserbyEmail(state.email).then(response => {
    
    console.log("Profil get userbyemail response = "+response.data.data.nom)
    state.nom = response.data.data.nom
    state.prenom = response.data.data.prenom
    state.adresse = response.data.data.adresse
    state.codepostal = response.data.data.codepostal
    state.ville = response.data.data.ville
    state.numtel = response.data.data.numtel
})
    .catch(error => {
        console.log(error.response.data)
    })
    

export class Profil extends Component {   
    render() {
        console.log(state.email)
        return (
            <article>
                <h3>Vous pouvez retrouver vos informations personnelles : </h3>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td><h5>Email : </h5></td>
                                <td>{state.email}</td>
                                <td><h5>Numéro de téléphone :</h5></td>
                                <td>{state.numtel}</td>
                            </tr>
                            <tr>
                                <td><h5>Nom :</h5></td>
                                <td>{state.nom}</td>
                                <td><h5>Adresse :</h5></td>
                                <td>{state.adresse}
                                <br></br>{state.codepostal} {state.ville}
                            </td>
                            </tr>
                            <tr>
                                <td><h5>Prénom :</h5></td>
                                <td>{state.prenom}</td>
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