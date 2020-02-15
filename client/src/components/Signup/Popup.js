import React from "react";
import { Modal, Button } from "react-bootstrap";

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
                    <p>Merci de vérifier</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.onClose}>OK</Button>
                </Modal.Footer>
            </Modal.Dialog>
        );
    }
}
export default Popup;


