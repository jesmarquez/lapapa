import { useState } from "react";
import './App.css'
import { OrdenarModal, CardDeck } from './components';
import { Header } from './components/ui/Header'
import { useFetch } from "./hooks/useFetch";
import { Cart } from "./components/Cart";


function App() {
  // state for show/hide cart (sidebar)
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  // data has list of foods
  const { data, isLoading, hasError } = useFetch('http://localhost:8000/foods');
  const [foods, setFoods] = useState(data);
  const [showOrdenar, setShowOrdenar] = useState(false);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [amountCart, setAmount] = useState(JSON.parse(localStorage.getItem('amount')) || 0);


  const handleOrdenarClose = () => setShowOrdenar(false);

  const handleOrdenarMostrar = () => setShowOrdenar(true);

  const handleOnlyShowCart = () => setShowOffcanvas(true);

  const handleShowOffcanvas = (newFood = {}) => {
    let newCartAmount = 0;
    // get food's detail
    const itemDetails = data.find(item => item.id === newFood.id);
    newFood.name = itemDetails.foodName;
    newFood.precio = itemDetails.precio;

    let indexFood = cartItems.find(food => food.id === newFood.id);
    let newCartItems = cartItems;

    if (indexFood === undefined) {
      newCartAmount = amountCart + (newFood.amount * newFood.precio);
      newCartItems.push(newFood);
    } else {
      newCartItems = cartItems.map((item) => {
        if (item.id === newFood.id) {
          item.amount += newFood.amount;
          // amountCartLocalStorage += (newFood.amount * newFood.precio);
          newCartAmount = amountCart + (newFood.amount * newFood.precio);
          return item;
        }
        return item;
      });
    }
    //updating states
    setCartItems(newCartItems);
    setAmount(newCartAmount);
    // to update data in persistent storage
    localStorage.setItem('amount', newCartAmount);
    localStorage.setItem('cart', JSON.stringify(newCartItems));
    setShowOffcanvas(true);
  }

  const handleHideOffcanvas = () => setShowOffcanvas(false);

  const deleteItemIntoCart = async ( id ) => {
    console.log(cartItems);
    let amount=0;

    let cartItemsLocalStorage = JSON.parse(localStorage.getItem('cart'));

    const updateCartItemsLocalStorage = await cartItemsLocalStorage.filter( (item) => {
      return item.id !== id;
    });

    localStorage.setItem('cart', JSON.stringify(updateCartItemsLocalStorage));

    const newCartItems = await cartItems.filter( (item) => {
      if (item.id === id) amount = item.amount;
      return item.id !== id;
    });
    // console.log(newCartItems);
    setCartItems(newCartItems);
    const item = data.find(item => item.id === id);
    const itemPrice = parseFloat(item.precio);
    // console.log(amount, itemPrice);
    const subtotalDelete = amount * itemPrice;
    // console.log(newTotal);
    const newTotal = amountCart - subtotalDelete;
    setAmount(newTotal);
    localStorage.setItem('amount', newTotal);

    return;
  }

  return (
    <>
      <main >
        <div className="bg-image"></div>
        <Header onShowCart={handleOnlyShowCart} />
        <CardDeck items={data}
          onShowOffcanvas={handleShowOffcanvas}
          onShowOrdenar={handleOrdenarMostrar} />
        <OrdenarModal showOrdenar={showOrdenar}
          handleOrdenarClose={handleOrdenarClose} />
        <Cart
          cartItems={cartItems}
          showOffcanvas={showOffcanvas}
          handleHideOffcanvas={handleHideOffcanvas}
          handleOrdenarMostrar={handleOrdenarMostrar}
          amountCart={amountCart}
          deleteItemIntoCart={ deleteItemIntoCart}
        />
      </main> {/* div app */}
    </>
  )
}

export default App
