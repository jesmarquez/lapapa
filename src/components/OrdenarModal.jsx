import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export const OrdenarModal = ({ showOrdenar, handleOrdenarClose } ) => {

  // console.log(showOrdenar);
  // const [show, setShow] = useState(showOrdenar);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(showOrdenar);
  const handleClickSend = () => {
    console.log('Send ')
  }
  return (
    <Modal
        show={showOrdenar}
        onHide={handleOrdenarClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enviar orden!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleOrdenarClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={ handleClickSend }>Enviar orden</Button>
        </Modal.Footer>
    </Modal>
  );
}
