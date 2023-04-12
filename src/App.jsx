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

  const handleShowOffcanvas = (id = null) => {
    console.log(id);
    setShowOffcanvas(true);
  }
  const handleHideOffcanvas = () => setShowOffcanvas(false);

  const { data, isLoading, hasError } = useFetch('http://localhost:8000/foods');

  const [ foods, setFoods ] = useState(data);

  
  // console.log(data);
  const [showOrdenar, setShowOrdenar] = useState(false);

  const handleOrdenarClose = () => setShowOrdenar(false);
  const handleOrdenarMostrar = () => setShowOrdenar(true);

  return (
    <>

      <main >
        <div className="bg-image"></div>
        <header className="position-relative">
          <div className="container-fluid py-4 px-4 bg-dark">
            <h1 className="text-white text-center">La papa</h1>
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
