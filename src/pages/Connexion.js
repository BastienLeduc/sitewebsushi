import React, { Component } from 'react';

export class Connexion extends Component {
    render() {

        return (
            <div id="main">
                <article className="active" >
                    <h2 class="major">Connexion</h2>
                    <form method="post" action="#">
                        <div class="fields">
                            <div class="field">
                                <label for="email">Email</label>
                                <input type="text" name="email" id="email" placeholder="Email" />
                            </div>
                            <div class="field">
                                <label for="password">Mot de passe</label>
                                <input type="password" name="password" id="password" placeholder="Mot de passe" />
                            </div>
                            <div class="field">
                                <input type="submit" value="Connexion" className="primary" />
                            </div>
                        </div>

                    </form>
                </article>

            </div >

        );
    }
}
export default Connexion;