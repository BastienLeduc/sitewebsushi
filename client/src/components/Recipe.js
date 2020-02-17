import React, { Component } from 'react'
import { connect } from 'react-redux'
import API from "../utils/API";

class Recipe extends Component {
    state = {
        email: "bastien@test.com",
        num: "2",
        contenu: this.props.addedItems,
        prix: this.props.total
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
