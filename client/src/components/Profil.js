import React, { Component } from 'react';

export class Profil extends Component {
    render() {

        return (
            <article>
                <h3>Vous pouvez retrouver vos informations personnelles : </h3>
                <div>
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