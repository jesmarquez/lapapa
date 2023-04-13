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
  const [amountCart, setAmount] = useState(JSON.parse(localStorage.getItem('amount')) || 0);
  

  const handleOrdenarClose = () => setShowOrdenar(false);
  
  const handleOrdenarMostrar = () => setShowOrdenar(true);
 
  const handleOnlyShowCart = () => setShowOffcanvas(true);

  const handleShowOffcanvas = (newFood = {}) => {

    let amountCartLocalStorage = parseFloat(localStorage.getItem('amount')) || 0;

    const itemDetails = data.find( item => item.id === newFood.id );
    // console.log(itemDetails);
    newFood.name = itemDetails.foodName;
    newFood.precio = itemDetails.precio;

    if (cartItems.length > 0) {
      // console.log(cartItems);
      // console.log(newFood);

      let indexFood = cartItems.find( food => food.id === newFood.id );
      console.log('index food:', indexFood);

      if (indexFood === undefined) {
        console.log('food is not into cart');
        let cartItemsLocalStorage = JSON.parse(localStorage.getItem('cart'));
        cartItemsLocalStorage.push(newFood);

        setCartItems(cartItemsLocalStorage);
        // cartItemsCart.forEach( i => amountCart+= amountCart + (newFood.amount * newFood.precio));
        
        amountCartLocalStorage+= (newFood.amount * newFood.precio);
        localStorage.setItem('amount', amountCartLocalStorage);
        localStorage.setItem('cart', JSON.stringify(cartItemsLocalStorage));
        setAmount(amountCartLocalStorage);


      } else {
        let updatedCartItems = cartItems.map( (item) => {
          if (item.id === newFood.id) {
            item.amount += newFood.amount;
            amountCartLocalStorage+= (parseFloat(newFood.amount) * parseFloat(newFood.precio));
            return item;
          }
          return item;
        });
        
        console.log(amountCartLocalStorage, newFood.amount, newFood.precio);
        setAmount(amountCartLocalStorage);
        localStorage.setItem('amount', amountCartLocalStorage);
        
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
        console.log('food is into cart');
      }
      
    } else {

      console.log('no items into cart');
      let localCartItems = [];

      localCartItems.push(newFood);
      localStorage.setItem('cart', JSON.stringify(localCartItems));
      setCartItems(localCartItems);

      // localCartItems.forEach( i => amountCart+= amountCart + (newFood.amount * newFood.precio));
      amountCartLocalStorage+= (newFood.amount * parseFloat(newFood.precio));
      setAmount(amountCartLocalStorage);
      localStorage.setItem('amount', amountCartLocalStorage);

    }

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
                <img src={ shoppingCart } style={{ width: "50px" }} onClick={ () => handleOnlyShowCart() }/>
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
                amountCart={amountCart}
              />
            </div>
          </div>
        </section>
      </main> {/* div app */}
    </>
  )
}

export default App
