import { useState } from "react";
// import backgroundMain from './assets/background-cook-2.jpg'
import './App.css'
import { FoodCard, OrdenarModal } from './components';
import { useFetch } from "./hooks/useFetch";
import { Cart } from "./components/Cart";


const cartItems = [
  {
    id: 1,
    name: "Arepa reina pepiada",
    price: 9.00,
    amount: 3
  },
  {
    id: 2,
    name: "Arepa queso y carne",
    price: 7.00,
    amount: 2
  },
];
function App() {

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleShowOffcanvas = () => setShowOffcanvas(true);
  const handleHideOffcanvas = () => setShowOffcanvas(false);

  const { data, isLoading, hasError } = useFetch('http://localhost:8000/foods');

  // console.log(data);
  const [showOrdenar, setShowOrdenar] = useState(false);

  const handleOrdenarClose = () => setShowOrdenar( false );
  const handleOrdenarMostrar = () => setShowOrdenar( true );

  let urlVegetables = 'https://firebasestorage.googleapis.com/v0/b/lapapa-faabf.appspot.com/o/vegetables.jpg?alt=media&token=46648d09-d8bc-41eb-8983-75faf22180e1';

  // let detailsFood = {
  //   urlImage : 'https://firebasestorage.googleapis.com/v0/b/lapapa-faabf.appspot.com/o/arepa-queso-carne-mechada.jpg?alt=media&token=1a85b5d8-3858-439a-bc58-8d26af1a6b7d',
  //   foodName: 'Arepa queso y carne',
  //   calories: '900 cals',
  //   precio : '8.00'
  // };

  // console.log(detailsFood);
  return (
    <>

      <div style={{ backgroundImage: "url(" + urlVegetables + ")" }}>
        <div className="container-fluid pt-4 pr-4">
          <div className="row justify-content-md-center">
            <div className="col">
              <div className="bg-dark bg-gradient p-3 fixed-top">
                  <h1 className="text-white text-center">La papa</h1>
              </div>
            </div>
          </div>
          {
            data
            ?
            data.map( detailsFood => (
              <FoodCard 
                key={ detailsFood.id } 
                setShowOrdenar = { handleOrdenarMostrar }
                showOffcanvas = { handleShowOffcanvas }
                detailsFood = { detailsFood }/>
            ))
            : <h1>Cargando!</h1>
          }
          <OrdenarModal showOrdenar = { showOrdenar } handleOrdenarClose = { handleOrdenarClose }/>


          <Cart
            cartItems = { cartItems}
            showOffcanvas={ showOffcanvas } 
            handleHideOffcanvas={ handleHideOffcanvas } 
            handleOrdenarMostrar={ handleOrdenarMostrar } 
          />
        
        </div> {/* div container */}
      </div> {/* div app */}



     </>
  )
}

export default App
