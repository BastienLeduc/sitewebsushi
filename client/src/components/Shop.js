import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions'

class Shop extends Component {
    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        let itemList = this.props.items.map(item => {
            return (
                <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.nom} />
                        <span to="/shop" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(item.id) }}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">

                        <span className="card-title">{item.nom}</span>
                        <p>{item.type}</p>
                        <p><b>Prix: {item.prix}€</b></p>
                    </div>
                </div>

            )
        })

        return (
            <div>
                <article>
                    <h3 className="center">Nos sushis</h3>
                    <div className="box">
                        {itemList}
                    </div>
                </article>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)