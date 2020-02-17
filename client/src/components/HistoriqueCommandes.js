import React, { Component } from 'react';
import API from "../utils/API";

const commandesTab = []

API.getCommandeByMail(localStorage.getItem("email")).then(response => {
    for (let i = 0; i < response.data.data.length; i++) {
        commandesTab.push(response.data.data[i])
    }
    commandesTab.sort(comparaisonTab);
})
    .catch(error => {
        console.log(error.response)
    })

function comparaisonTab(a, b) {
    const numA = a.num;
    const numB = b.num;

    let comparison = 0;
    if (numA > numB) {
        comparison = -1;
    } else if (numA < numB) {
        comparison = 1;
    }
    return comparison;
}


export class HistoriqueCommandes extends Component {
    render() {
        let commandes = commandesTab.length ?

            (
                commandesTab.map(commande => {
                    let datebrut = commande.datecollecte
                    let datesplit = datebrut.split('T')
                    return (
                        
                        <div className="cart" key={commande.num}>
                            <h5>Commande Numero {commande.num}</h5>
                            <h5>Prix {commande.prix} €</h5>
                            <h5>Date de collecte {datesplit[0]}</h5>
                            <table>
                                <tbody>
                                    {
                                        commande.contenu.map(item => {
                                            return (
                                                <tr className="collection-item avatar" key={item.id}>
                                                    <td className="item-img">
                                                        <img src={item.img} alt={item.img} className="" />
                                                    </td>
                                                    <td className="title">{item.nom}</td>
                                                    <td>Prix: {item.prix}€</td>
                                                    <td>Quantité: {item.quantity}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                    )
                })
            ) :

            (
                <p>Aucun.</p>
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