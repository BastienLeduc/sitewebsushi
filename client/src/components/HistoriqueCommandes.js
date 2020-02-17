import React, { Component } from 'react';
import API from "../utils/API";

const commandesTab = []

API.getCommandeByMail("bastien@test.com").then(response => {
    for (let i = 0; i < response.data.data.length; i++) {
        commandesTab.push(response.data.data[i])
    }
})
    .catch(error => {
        console.log(error.response)
    })

export class HistoriqueCommandes extends Component {
    render() {
        let commandes = commandesTab.length ?
            (
                commandesTab.map(commande => {
                    return (
                        <div className="cart" key={commande.num}>
                            <h5>Commande Numero {commande.num}</h5>
                            {
                                commande.contenu.map(item => {
                                    return (
                                        <li className="collection-item avatar" key={item.id}>
                                            <div className="item-img">
                                                <img src={item.img} alt={item.img} className="" />
                                            </div>
                                            <div className="item-desc">
                                                <span className="title">{item.title}</span>
                                                <b>Prix: {item.prix}€</b>
                                                <b>Quantité: {item.quantity}</b>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </div>

                    )
                })
            ) :

            (
                <p>Aucune.</p>
            )

        return (
            <div>
                <article>
                    <div>
                        <h3>Historique Commandes</h3>
                        <ul className="collection">
                            {commandes}
                        </ul>
                    </div>
                </article>
            </div>

        );
    }
}
export default HistoriqueCommandes;