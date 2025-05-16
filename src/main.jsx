import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';
import SignIn from './components/SignIn.jsx';
import SignOut from './components/Signup.jsx';
import AuthProvider from './constext/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: ()=> fetch('http://localhost:4000/coffees'),
        Component: Home,
      },
      {
        path: "/add-coffee",
        Component: AddCoffee
      },
      {
        path: "/update-coffee/:id",
        loader: ({params})=> fetch(`http://localhost:4000/coffees/${params.id}`),
        Component: UpdateCoffee
      },
      {
        path:"/coffees/:id",
        loader: ({params})=> fetch(`http://localhost:4000/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
      {
        path: '/signin',
        Component: SignIn
      },
      {
        path: '/signup',
        Component: SignOut
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
