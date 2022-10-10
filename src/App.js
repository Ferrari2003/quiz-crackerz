import React from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
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
        return fetch(`https://openapi.programming-hero.com/api/quiz`)
       },
       element: <Home></Home>
      },
      {
        path:'/topics',
        element: <Topics></Topics>
      },
     
      {
        path: '/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
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