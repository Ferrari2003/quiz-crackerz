import React from 'react';
import './Cart.css'



const Cart = ({quiz}) => {
    const {name,logo,} = quiz
   
    return (
        <div className='carts '>
           <img src={logo} alt="" />   
           <h3>{name}</h3> 
            <div className='btn'>
             <button>Start Practice </button>      

            </div>
       </div>
    );
};

export default Cart;