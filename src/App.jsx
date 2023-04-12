import { useState } from "react";
import shoppingCart from './assets/shopping_cart_simple_icon.png';
import './App.css'
import { FoodCard, OrdenarModal } from './components';
import { useFetch } from "./hooks/useFetch";
import { Cart } from "./components/Cart";


function App() {

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const { data, isLoading, hasError } = useFetch('http://localhost:8000/foods');
  const [ foods, setFoods ] = useState(data);
  const [showOrdenar, setShowOrdenar] = useState(false);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const handleOrdenarClose = () => setShowOrdenar(false);
  
  const handleOrdenarMostrar = () => setShowOrdenar(true);
 
  const handleShowOffcanvas = (newFood = {}) => {
    setShowOffcanvas(true);
  }

  const handleHideOffcanvas = () => setShowOffcanvas(false);

  return (
    <>

      <main >
        <div className="bg-image"></div>
        <header className="position-relative">
          <div className="container-fluid py-4 px-4 bg-dark">
            <div className="row">
              <div className="col-10 col-md-11">
                <h1 className="text-white text-center">La papa</h1>
              </div>
              <div className="col-2 col-md-1 align-middle" style={{ verticalAlign: "middle" }}>
                <img src={ shoppingCart } style={{ width: "50px" }} onClick={ () => handleShowOffcanvas(null) }/>
              </div>
            </div>
          </div> {/* div container-fluid */}
        </header>
        <section>
          <div id="card-deck" className="container py-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-5">
              {
                data
                  ?
                  data.map(detailsFood => (
                    <FoodCard
                      key={detailsFood.id}
                      setShowOrdenar={handleOrdenarMostrar}
                      showOffcanvas={handleShowOffcanvas}
                      detailsFood={detailsFood} />
                  ))
                  : <h1>Cargando!</h1>
              }
              <OrdenarModal showOrdenar={showOrdenar}
                handleOrdenarClose={handleOrdenarClose} />
              <Cart
                cartItems={cartItems}
                showOffcanvas={showOffcanvas}
                handleHideOffcanvas={handleHideOffcanvas}
                handleOrdenarMostrar={handleOrdenarMostrar}
              />
            </div>
          </div>
        </section>
      </main> {/* div app */}
    </>
  )
}

export default App
