import React from 'react'
import { RiDeleteBin3Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import {toast} from 'react-hot-toast';
import { remove} from '../redux/Slices/CartSlice';
import "./Cartitem.css"


const Cartitem = ({item , itemIndex}) => {

    const dispatch = useDispatch();

   const removeFromCart = () => {
      dispatch(remove(item.id));
      toast.error("Item  Removed");
   }

  return (
<div>
    <div className='mall'>
           <div>
                  
                  <img src={item.image} alt=''/>
           </div>  

           <div className='pro' >
              <div className='title'>
                  <h1>{item.title}</h1>
          </div>
             <br/>

            <h1>{item.description.split(" ").slice(0,18).join(" ")+"...."}</h1>
            <br/>

            <div className='price'>
                 <p className='rs'>{item.price} ₹/- </p>
             <div 
             className='del'
             onClick={removeFromCart}>
                    <RiDeleteBin3Fill/>
             </div>

            </div>
               
           </div>
    </div>
    <br/>
    <hr className='line'></hr>
    <br/>
</div>
  )
}

export default Cartitem
