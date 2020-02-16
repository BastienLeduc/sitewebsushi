import React from "react";
import { Modal } from "react-bootstrap";

export class Popup extends React.Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <Modal.Dialog className="my-modal">
                <Modal.Header>
                    <Modal.Title>Erreur !</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{this.props.children}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="waves-effect waves-light btn pink remove" onClick={this.onClose}>OK</button>
                </Modal.Footer>
            </Modal.Dialog>
        );
    }
}
export default Popup;


