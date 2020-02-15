import React, { Component } from 'react';

export class Contact extends Component {
    render() {

        return (
            <div>
                <article>
                    <h3>Vous pouvez retrouver la boutique d'Angers : </h3>
                    <div>
                        <p>
                        </p><table border={0}>
                            <tbody>
                                <tr>
                                    <td><h4>Horaires :</h4></td>
                                    <td><h4>Adresse : </h4></td>
                                </tr>
                                <tr>
                                    <td>
                                        <table border={0}>
                                            <tbody>
                                                <tr>
                                                    <td>Lundi</td>
                                                    <td><br /></td>
                                                    <td>18:00 - 23:00</td>
                                                </tr>
                                                <tr>
                                                    <td>Mardi</td>
                                                    <td>12:00 - 14:00</td>
                                                    <td>19:00 - 22:00</td>
                                                </tr>
                                                <tr>
                                                    <td>Mercredi</td>
                                                    <td>12:00 - 14:00</td>
                                                    <td>19:00 - 22:00</td>
                                                </tr>
                                                <tr>
                                                    <td>Jeudi</td>
                                                    <td>12:00 - 14:00</td>
                                                    <td>19:00 - 22:00</td>
                                                </tr>
                                                <tr>
                                                    <td>Vendredi</td>
                                                    <td>12:00 - 14:00</td>
                                                    <td>19:00 - 22:00</td>
                                                </tr>
                                                <tr>
                                                    <td>Samedi</td>
                                                    <td>11:00 - 15:00</td>
                                                    <td>18:00 - 00:00</td>
                                                </tr>
                                                <tr>
                                                    <td>Dimanche</td>
                                                    <td></td>
                                                    <td>19:00 - 22:00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td>
                                        <br></br>
                                        Polytech Angers
                                    <br></br>
                                        62 avenue notre Dame du Lac
                                    <br></br>
                                        49000 ANGERS
                                    <br></br>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.481710964349!2d-0.5942666849693574!3d47.48052850467266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48087f23ae2cb335%3A0xfa390cbd9cbda60f!2sPolytech%20Angers%20Campus%20Belle%20-%20Beille!5e0!3m2!1sfr!2sfr!4v1581523927381!5m2!1sfr!2sfr" width={400} height={300} frameBorder={0} style={{ border: 0 }} allowFullScreen />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p />
                    </div>
                </article>
            </div>

        );
    }
}
export default Contact;