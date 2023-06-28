import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';
import { CartItem } from './CartItem';
import { foodPrice } from '../util';

export const Cart = ({ cartItems, showOffcanvas, handleHideOffcanvas, handleOrdenarMostrar, amountCart, deleteItemIntoCart }) => {

  return (
    <Offcanvas show={ showOffcanvas } onHide={handleHideOffcanvas} backdrop="true">
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <Image src={ import.meta.env.VITE_IMAGES_STORAGE + 'food-tray.png?alt=media&token=' + import.meta.env.VITE_TOKEN_STORAGE } rounded style={{ width: '50px'}}/>
        </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup as="ol">
            {
              cartItems.length ? 
                cartItems.map( item =>  (<CartItem key = { item.id } item = { item } deleteItemIntoCart = { deleteItemIntoCart }/>))
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
            {
              cartItems.length ? 
                <Button variant="success" onClick={ handleOrdenarMostrar }>Ordenar!</Button>
                :
                <Button variant="success" disabled>Ordenar!</Button>

            }
          </div> 
        </Offcanvas.Body>
    </Offcanvas>
  )
}
