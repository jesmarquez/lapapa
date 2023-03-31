import { useState } from "react";
import vegetables from './assets/vegetables.jpg';
import Button from 'react-bootstrap/Button';
import backgroundMain from './assets/background-cook-2.jpg'
import './App.css'
import { FoodCard } from './components/FoodCard';
import { OrdenarModal } from './components/OrdenarModal';

function App() {

  const [showOrdenar, setShowOrdenar] = useState(false);

  const handleOrdenarClose = () => setShowOrdenar( false );
  const handleOrdenarMostrar = () => setShowOrdenar( true );

  let urlVegetables = 'https://firebasestorage.googleapis.com/v0/b/lapapa-faabf.appspot.com/o/vegetables.jpg?alt=media&token=46648d09-d8bc-41eb-8983-75faf22180e1';

  let detailsFood = {
    urlImage : 'https://firebasestorage.googleapis.com/v0/b/lapapa-faabf.appspot.com/o/arepa-queso-carne-mechada.jpg?alt=media&token=1a85b5d8-3858-439a-bc58-8d26af1a6b7d',
    foodName: 'Arepa queso y carne',
    calories: '900 cals',
    precio : '8.00'
  };

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



          <div className="row justify-content-md-center foodOne">
            <div className="col-2"></div>
            <div className="col">
              <FoodCard setShowOrdenar = { handleOrdenarMostrar } detailsFood = { detailsFood }/>
            </div>
            <div className="col-2"></div>
          </div>


          <div className="row justify-content-md-center mt-3">
            <div className="col-2"></div>
            <div className="col">
              <FoodCard setShowOrdenar = { handleOrdenarMostrar } detailsFood = { detailsFood }/>
            </div>
            <div className="col-2"></div>
          </div>

          <OrdenarModal showOrdenar = { showOrdenar } handleOrdenarClose = { handleOrdenarClose }/>
        </div> {/* div container */}

      </div> {/* div app */}

     </>
  )
}

export default App
