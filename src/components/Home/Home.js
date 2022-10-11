import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Home.css'





const Home = () => {
    const cards = useLoaderData([]);
    const {data} = cards
    console.log(data)
    
    return (
        <div className='home-container'>
            <div className='cart-container'>
            {
            data.map(quiz => <Cart key={quiz.id}
            quiz ={quiz}
            ></Cart>)
          }
            </div>  
            <div className='cards=container'>

            </div>   
        </div>
    ); 
};

export default Home;