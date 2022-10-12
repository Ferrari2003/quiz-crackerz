import React from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './components/Blog/Blog';


import Main from './layout/Main';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Quiz from './components/Quiz/Quiz';


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
       path:'/quiz/:quizId',
       loader:async({params})=>{
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
       },
       element: <Quiz></Quiz>
      },
      {
         path:'/topics',
         loader:async()=>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/`)
         },
         element: <Topics></Topics>
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