import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/Cartitem';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import "./Cart.css"

const Cart = () => {
   
     const {cart} = useSelector( (state) => state);
     console.log("Printing Cart");
     console.log(cart)
     const [totalAmount,setTotalAmount] = useState(0);

    
   useEffect (   () => {
     setTotalAmount ( cart.reduce (  ( acc ,curr) => acc + curr.price,0));
   },[cart])

 

  return (
    <div>
       {
        cart.length > 0 ?
        (<div>
          <div className='carts'>
            <div  className='item'>
                {
                    cart.map( (item,index) =>{
                        return <CartItem key= {item.id} item={item} itemIndex={index}/>
                    })
                }
            </div>


            <div>
                 <div className='sum'>
                    <div className='ca'><p className='p'>YOUR CART</p></div>
                    <div className='su'>SUMMARY</div>
                    <br/>
                    <p>
                        <span >Total Items: {cart.length}</span>
                    </p>
                 </div>

                  <div className='total'>
                    <p className='tc'>Total Amount : {totalAmount} ₹/-</p>
                    <button className='btn'>
                        Checkout  Now
                    </button>
                  </div>
            </div>
          </div>


        </div>) :
        (
            <div className='emp'>
            <h1 className='is'>Your Cart is Empty</h1>
            <Link to={"/"} >
                 <button className='shop'>
                    Shop Now 
                 </button>
            </Link>
            </div>
        )
       }
    </div>
  )
}

export default Cart
