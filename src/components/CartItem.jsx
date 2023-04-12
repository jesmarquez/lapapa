import ListGroup from 'react-bootstrap/ListGroup';
import { foodPrice } from '../util';

export const CartItem = ( { id, item }) => {

    
    const handleClick = (id) => {
        console.log(`id: ${ id }`);
    
    }


  return (
    <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
    >
        <div className="ms-2 me-auto">
        <div className="fw-bold fs-4 mb-3">{ item.name }</div>
        <p className="text-start m-0">Precio: { foodPrice.format(item.precio) }</p>
        <p className="text-start m-0">Cantidad: { item.amount }</p>
        <p className="fs-6 text-end m-0">Subtotal: { foodPrice.format((item.precio * item.amount)) }</p>
        </div>

        <div className="align-items-center">
        <button type="button" className="btn btn-outline-danger" onClick={ () => handleClick(item.id) }>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path>
            </svg>
        </button>
        </div>

    </ListGroup.Item>
  )
}
