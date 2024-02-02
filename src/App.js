import './App.css';
import Navbar from './components/Navbar';
import {Routes}  from "react-router-dom"
import {Route}  from "react-router-dom"
import Home from "./pages/Home";
import Cart from "./pages/Cart"



function App() {
  return (
    <div className="App">
           <div className='navbar '>
              <Navbar/>
           </div>

           <Routes>

                  <Route path="/" element={<Home/>} />
                  <Route path="/cart" element={<Cart/>} />

           </Routes>
    </div>
  );
}

export default App;










