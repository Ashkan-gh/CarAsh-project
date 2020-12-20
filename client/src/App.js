import AddCar from "./views/AddCar"
import './App.css';
import {Router} from "@reach/router"
import UpdateCar from "./views/UpdateCar"
import Main from "./views/Main"
import Details from "./views/Details"
import Signin from "./views/Signin"
import Register from "./views/Register"

function App() {
  return (
    <div className="App">
      <Router>
      <Signin path="/" />
        <Register path="/register" />
        <Main path="/cars"/>
     <AddCar path="/cars/new" />
     <UpdateCar path="/cars/:id/edit" />
     <Details path="/cars/:id" />
     </Router>
    </div>
  );
}

export default App;
