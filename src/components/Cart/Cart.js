import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



const Cart = ({quiz}) => {
    const {name,logo,id} = quiz
   
    return (           
            <div className='carts '>
                         <img src={logo}  alt=""  />   
                         <h3>{name}</h3> 
                         <div className='btn'>      
                          <Link to={`/quiz/${id}`}>
                          <button>
                             Start Quiz   
                           <FontAwesomeIcon className='icon' icon={faArrowAltCircleRight}></FontAwesomeIcon>          
                           </button>  
                          </Link>                 
                     </div>
             </div>                 
    );
};

export default Cart;