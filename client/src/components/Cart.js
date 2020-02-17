import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions'
import Recipe from './Recipe'

class Cart extends Component {

    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }

    render() {

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (
                        <li className="collection-item avatar" key={item.id}>
                            <div className="item-img">
                                <img src={item.img} alt={item.img} className="" />
                            </div>
                            <div className="item-desc">
                                <span className="title">{item.nom}</span>
                                <p>{item.desc}</p>
                                <b>Prix: {item.prix}€</b>
                                <br></br>
                                <b>Quantité: {item.quantity}</b>
                                <div className="add-remove">
                                    <Link to="/panier"><i className="material-icons" onClick={() => { this.handleAddQuantity(item.id) }}>arrow_drop_up</i></Link>
                                    <Link to="/panier"><i className="material-icons" onClick={() => { this.handleSubtractQuantity(item.id) }}>arrow_drop_down</i></Link>
                                </div>
                                <button className="waves-effect waves-light btn pink remove" onClick={() => { this.handleRemove(item.id) }}>Retirer</button>
                            </div>
                        </li>
                    )
                })
            ) :

            (
                <p>Rien.</p>
            )
        return (
            <div>
                <article>
                    <div className="cart">
                        <h3>Vous avez commandé:</h3>
                        <ul className="collection">
                            {addedItems}
                        </ul>
                    </div>
                    <Recipe />
                </article>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)