import arepaAmarilloCarne from '../assets/arepa-queso-carne-mechada.jpg';
import { useState } from "react";


export const FoodCard = ( { setShowOrdenar, showOffcanvas, detailsFood } ) => {

  const [ amount, setAmount ] = useState(0);

  const handleClickSelect = (e) => {
    console.log(e.target.value);
    if (e.target.value != 'DEFAULT')
      setAmount(parseInt(e.target.value));

  };

  const addStorageAndshowOffcanvas = (id) => {

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let newFood = {
      id: id,
      amount: amount
    }
    console.log(cart, newFood);
    cart.push(newFood);

    localStorage.setItem('cart', JSON.stringify( cart ) );
    showOffcanvas(id);
  };

  // console.log( detailsFood );
  const { id, urlImage, foodName, calories, precio } = detailsFood;

  // console.log( urlImage, name, calories, precio );
  // let urlImage = 'https://firebasestorage.googleapis.com/v0/b/lapapa-faabf.appspot.com/o/arepa-queso-carne-mechada.jpg?alt=media&token=1a85b5d8-3858-439a-bc58-8d26af1a6b7d';
  return (
    <div className="row justify-content-md-center foodOne">
      <div className="col-2"></div>
      <div className="col">
        <div className="card">

            <img src={ urlImage } className="card-img-top" alt="arepa-amarillo-carne"></img>
            <div className="card-body">
                <div className="container">
                  <h3 className="card-title">{ foodName }</h3>
                  <h5 className="card-title">{ calories }</h5>
                  <h2 className='text-end'>${ precio }</h2>
                  <p className="card-text">Hecho a base de masa de maíz seco molido o de harina de maíz precocida. Rellena con carne mechada y queso rayado gouda.</p>
                  <div className="row">
                    <div className="col-12">

                    </div>
                    {
                      (amount > 0) ?
                      <button className="btn btn-dark float-end"  data-bs-toggle="modal" data-bs-target="#ordenarModal" onClick={ () => addStorageAndshowOffcanvas(id)  } >Agregar</button>
                      :
                      <button className="btn btn-dark float-end" disabled >Agregar</button>

                    }
                    <select className="form-select" aria-label="Default select example" style={{ width: '25%' }} defaultValue={'DEFAULT'} onClick= { handleClickSelect }>
                      <option value="DEFAULT">Cantidad?</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  

                </div>
            </div>
        </div>
      </div>
      <div className="col-2"></div>
    </div>
  )
}
