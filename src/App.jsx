import vegetables from './assets/vegetables.jpg';
import backgroundMain from './assets/background-cook-2.jpg'
import './App.css'
import { FoodCard } from './components/FoodCard';
import { OrdenarModal } from './components/OrdenarModal';

function App() {


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
              <FoodCard />
            </div>
            <div className="col-2"></div>
          </div>


          <div className="row justify-content-md-center mt-3">
            <div className="col-2"></div>
            <div className="col">
              <FoodCard />
            </div>
            <div className="col-2"></div>
          </div>


        </div> {/* div container */}

      </div> {/* div app */}

     </>
  )
}

export default App
