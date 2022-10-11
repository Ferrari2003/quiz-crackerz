import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'


const Cart = ({quiz}) => {
    const {name,logo,} = quiz
   
    return (
        <div className='carts '>
           <img src={logo} alt="" />   
           <h3>{name}</h3> 
            <div className='btn'>
             <button>
                Start Quiz   
                <FontAwesomeIcon className='icon' icon={faArrowAltCircleRight}></FontAwesomeIcon>          
                </button>      
            </div>
       </div>
    );
};

export default Cart;