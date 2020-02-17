import React, { Component } from 'react'
import { connect } from 'react-redux'
import API from "../utils/API";
import { PopupErreur } from './PopupErreur';
import { FormGroup, ControlLabel } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import { endOfDay, addDays } from 'date-fns'
import "react-datepicker/dist/react-datepicker.css";

class Recipe extends Component {
    popupShow = e => {
        this.setState({
            show: !this.state.show
        });
    };
    state = {
        email: localStorage.getItem("email"),
        show: false,
        datecollecte: null,
    };

    handleDateChange = date => {
        this.setState({
            datecollecte: date,
        })
    }

    send = async () => {
        const { email, datecollecte } = this.state;
        const contenu = this.props.addedItems
        const num = Math.round(new Date().getTime() / 1000);
        const prix = this.props.total;
        if (!contenu || contenu.length === 0) {
            return;
        }
        else {

            API.addCommande({ email, num, contenu, prix, datecollecte }).then(response => {
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
                <div className="dateClickandCollect">
                    <FormGroup controlId="date">
                        <ControlLabel>Date click&collect</ControlLabel>

                        <DatePicker
                            onChange={this.handleDateChange}
                            selected={this.state.datecollecte}
                            timeFormat="HH:mm"
                            timeCaption="time"
                            minDate={new Date()}
                            maxDate={addDays(new Date(), 7)}
                            timeIntervals={15}
                            showTimeSelect
                            dateFormat="d MMMM yyyy h:mm aa"
                        />
                    </FormGroup>
                </div>
                <div className="checkout">
                    <PopupErreur show={this.state.show} onClose={this.popupShow}>{this.state.msg_erreur}</PopupErreur>
                    <br></br>
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
