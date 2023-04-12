import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';
import { CartItem } from './CartItem';
import { foodPrice } from '../util';

export const Cart = ({ cartItems, showOffcanvas, handleHideOffcanvas, handleOrdenarMostrar, amountCart }) => {

  return (
    <Offcanvas show={ showOffcanvas } onHide={handleHideOffcanvas} backdrop="true">
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <Image src="https://firebasestorage.googleapis.com/v0/b/lapapa-faabf.appspot.com/o/food-tray.png?alt=media&token=80545618-d219-4641-bd20-73437528c469" rounded style={{ width: '50px'}}/>
        </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup as="ol">
            {
              cartItems.length ? 
                cartItems.map( item =>  (<CartItem key = { item.id } item = { item }/>))
              : 
              <Alert variant={'warning'}>
                No hay items en el cart
              </Alert>
            }
           
          </ListGroup>
          <div className="alert alert-dark mt-3" role="alert">
            <h3 className="text-center">Total:{ foodPrice.format(amountCart) }</h3>
          </div> 
          <div className="d-flex justify-content-center">
            <Button variant="success" onClick={ handleOrdenarMostrar }>Ordenar!</Button>
          </div> 
        </Offcanvas.Body>
    </Offcanvas>
  )
}
