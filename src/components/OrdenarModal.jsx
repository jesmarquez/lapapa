import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const OrdenarModal = ({ showOrdenar, handleOrdenarClose } ) => {

  console.log(showOrdenar);
  // const [show, setShow] = useState(showOrdenar);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(showOrdenar);

  return (
    <Modal
        show={showOrdenar}
        onHide={handleOrdenarClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Pedido y ordenar!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Verifique su pedido!
          Puede modificarlo!
          Presione botón ordenar para enviar su pedido al restaurant.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleOrdenarClose}>
            Cerrar
          </Button>
          <Button variant="primary">Ordenar</Button>
        </Modal.Footer>
    </Modal>
  );
}
