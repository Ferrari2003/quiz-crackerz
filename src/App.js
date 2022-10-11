import React from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';

import Main from './layout/Main';
import Home from './components/Home/Home';


const App = () => {
 const router = createBrowserRouter([
   {
    path:'/',
    element: <Main></Main>,
    children:[
      {
       path: '/',
       loader: async() => {   
        return fetch(`quiz.json`)
       },
       element: <Home></Home>
      },
     
      {
        path: '/statistics',
        loader:async() =>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/`)
        },
        element:<Statistics></Statistics>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'*',
        element: <h1>This is route Not Found 404</h1>
      }
    ]
   }
  
 ]);
  return (
    <div className='App'>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
};

export default App;