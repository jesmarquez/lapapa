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


  return (
    <>

      <div style={{ backgroundImage: "url(" + vegetables + ")" }}>
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
              <FoodCard setShowOrdenar = { handleOrdenarMostrar }/>
            </div>
            <div className="col-2"></div>
          </div>


          <div className="row justify-content-md-center mt-3">
            <div className="col-2"></div>
            <div className="col">
              <FoodCard setShowOrdenar = { handleOrdenarMostrar }/>
            </div>
            <div className="col-2"></div>
          </div>

          <OrdenarModal showOrdenar = { showOrdenar } handleOrdenarClose = { handleOrdenarClose }/>


          <div className="row justify-content-md-center mt-3">
            <div className="col-2"></div>
            <div className="col">
              <Button variant="primary" onClick={handleOrdenarMostrar}>
                Launch demo modal
              </Button>
            </div>
            <div className="col-2"></div>
          </div>
        </div> {/* div container */}

      </div> {/* div app */}

     </>
  )
}

export default App
