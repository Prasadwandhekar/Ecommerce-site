import React from 'react'
import "./Navbar.css";
import { FaCartShopping } from "react-icons/fa6";
import {NavLink} from "react-router-dom";
import { useSelector } from 'react-redux';

const Navbar = () => {


   const {cart} = useSelector( (state) => state );


  return (
    <div>
          <div className='nav'>
    <NavLink>
   <div className='img'>
   <img className='img1' src='https://th.bing.com/th/id/OIP.zYqzWWh9L_z7FauYuXQedwHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' alt='images' width={100} height={80}    />
    <div className='brand '  >Branded_Mall</div>
   </div>

    </NavLink>

          <div className='bar'>  

            <NavLink to="/">
            <p className='home'>Home</p>

            </NavLink>

             <NavLink to="/cart">
                <div className='facar'>
                <FaCartShopping className='cart'/>

                {
                cart.length > 0 && 
                 <span className='len'>{cart.length}</span>

                }

                </div>
             </NavLink>
            
          </div>
          </div>
    </div>
  )
}

export default Navbar
