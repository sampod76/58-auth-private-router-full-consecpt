
import { useState, useEffect } from 'react';
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main';
import Home from './Layout/Home';
import Login from './Layout/Login';
import Order from './Layout/Order';
import Register from './Layout/Register';
import PriveteRouter from './router/PriveteRouter';



function App() {
const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        loader: async()=>fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Home></Home>,

      },
      {
        path:'/home',
        loader: async()=>fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Home></Home>,

      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      // যখন কেউ লগইন করা ছাড়া কোনো একটা  জিনিস দেখতে পারবেনা এরকম একটা<PriveteRouter>  routher তৈরি করতে হবে  তার পেটের ভিতর ওই রাউটার  দিতে হবে যেটা দেখা যাবে না
      {
        path:'/orders',
        element:<PriveteRouter><Order></Order></PriveteRouter>
      }
    ]
  }
])



  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
