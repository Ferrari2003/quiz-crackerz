import React from 'react';
import { useLoaderData } from 'react-router-dom';





const Quiz = () => {
    
    const quizDetails =useLoaderData();
    console.log(quizDetails)
    
    return (
        <div>
                    
        </div>
    );
};

export default Quiz;