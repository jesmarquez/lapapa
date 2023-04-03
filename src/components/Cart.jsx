import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


export const Cart = ({ showOffcanvas, handleHideOffcanvas}) => {
  return (
    <Offcanvas show={ showOffcanvas } onHide={handleHideOffcanvas}>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <Image src="https://firebasestorage.googleapis.com/v0/b/lapapa-faabf.appspot.com/o/food-tray.png?alt=media&token=80545618-d219-4641-bd20-73437528c469" rounded style={{ width: '50px'}}/>
        </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action" aria-current="true">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Arepa reina pepiada</h5>
                <small>Cantidad: 3</small>
              </div>
              <p className="mb-1">Subtotal: $16.00</p>
              <small>Delivery</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action" aria-current="true">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Arepa queso carne </h5>
                <small>Cantidad: 1</small>
              </div>
              <p className="mb-1">Subtotal: $8.00</p>
              <small>Delivery</small>
            </a>
          </div>
          <div className="alert alert-dark mt-3" role="alert">
            <h3>Total: $24.00</h3>
          </div>
          <div className="position-relative">
            <div className="position-absolute top-50 start-50">
              <Button variant="secondary">Ordenar!</Button>
            </div>
          </div>
        </Offcanvas.Body>
    </Offcanvas>
  )
}
