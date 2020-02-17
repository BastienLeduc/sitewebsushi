import React, { Component } from 'react'
import { connect } from 'react-redux'
import API from "../utils/API";
import { Popup } from './Popup';

class Recipe extends Component {
    popupShow = e => {
        this.setState({
            show: !this.state.show
        });
    };
    state = {
        email: localStorage.getItem("email"),
        num: Math.round(new Date().getTime() / 1000),
        contenu: this.props.addedItems,
        prix: this.props.total,
        show: false
    };
    send = async () => {
        const { email, num, contenu, prix } = this.state;
        if (!contenu || contenu.length === 0) {
            return;
        }
        else {
            API.addCommande({ email, num, contenu, prix }).then(response => {
                window.location = "/";
            })
                .catch(error => {
                    console.log(error.response.data)
                    this.state.msg_erreur = error.response.data.text;
                    this.setState({ show: !this.state.show });
                })
        }
    }

    render() {

        return (
            <div className="container">
                <div className="collection">
                    <li className="collection-item"><b>Total: {this.props.total} €</b></li>
                </div>
                <div className="checkout">
                    <Popup show={this.state.show} onClose={this.popupShow}>{this.state.msg_erreur}</Popup>
                    <button className="waves-effect waves-light btn" onClick={this.send}>Commander</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total.toFixed(2)
    }
}

export default connect(mapStateToProps)(Recipe)
