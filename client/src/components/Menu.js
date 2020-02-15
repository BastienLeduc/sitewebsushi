import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions'

class Menu extends Component {
    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        let itemList = this.props.items.map(item => {
            return (
                <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.title} />
                        <span to="/menu" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(item.id) }}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">

                        <span className="card-title">{item.title}</span>
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu)