import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const cards = useLoaderData();
     console.log(cards)
    return (
        <div>
            <h2>This is home:</h2>
            
        </div>
    );
};

export default Home;