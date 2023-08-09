import arepaAmarilloCarne from '../assets/arepa-queso-carne-mechada.jpg';
import { useState } from "react";


export const FoodCard = ({ setShowOrdenar, showOffcanvas, detailsFood }) => {

  const [amount, setAmount] = useState(0);

  const handleClickSelect = (e) => {
    console.log(e.target.value);
    if (e.target.value != 'DEFAULT')
      setAmount(parseInt(e.target.value));

  };

  const addStorageAndshowOffcanvas = (id) => {

    // let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let newFood = {
      id: id,
      amount: amount
    }
    // console.log(cart, newFood);
    // cart.push(newFood);

    // localStorage.setItem('cart', JSON.stringify( cart ) );
    showOffcanvas(newFood);
  };

  // console.log( detailsFood );
  const { id, urlImage, foodName, calories, precio } = detailsFood;

  return (
    <article>
      <div className="card col-12">
        <img src={urlImage} className="card-img-top mb-2" alt="arepa-amarillo-carne" />
        <div className="card-body container px-4">
          <header>
            <div className="row">
              <div className="col-8">
                <h3 className="card-title mb-0">{foodName}</h3>
                <span className="card-title text-muted fst-italic">{`(${calories})`}</span>
              </div>
              <div className="col-4">
                <h2 className='text-end'>${precio}</h2>
              </div>
            </div>
          </header>
          <p className="card-text py-4 mb-0 text-muted">
            Hecho a base de masa de maíz seco molido o de harina de maíz precocida. Rellena con carne mechada y queso rayado gouda.
          </p>
          <div className="row">
            <div className="col-12">
              <select className="form-select" aria-label="Default select example" style={{ width: '25%' }} defaultValue={'DEFAULT'} onChange={handleClickSelect}>
                <option value="DEFAULT">Cantidad?</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          {
            (amount > 0) ?
              <button className="btn btn-block btn-primary py-3 float-end" data-bs-toggle="modal" data-bs-target="#ordenarModal" onClick={() => addStorageAndshowOffcanvas(id)} >Agregar</button>
              :
              <button className="btn btn-dark float-end" disabled >Agregar</button>

          }
        </div>{/* card-body */}
      </div>
    </article>

  )
}

