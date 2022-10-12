import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Home.css'
import logo from '../../photos/quiz-word-red-d-letters-to-illustrate-exam-evaluation-assessment-to-measure-your-knowledge-expertise-44060147.jpg'


    const Home = () => {
       const cards = useLoaderData([]);
       const {data} = cards
    
    
    return (
        <div className='home-container'>
            <div className='text'>
                <div>
                <h1>Welcome To My Card Quiz </h1>
                <p>Welcome to our site Card quiz a. In our site you can learn many things <br />
                about programming.You can play many quiz games.To start the game, <br />
                Please got to the home page.
                </p>
                </div>
                <div>
                    <img  src={logo} alt=""  />
                </div>
            </div>
            
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