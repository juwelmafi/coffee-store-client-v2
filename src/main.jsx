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
import UserProfile from './components/userProfile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: ()=> fetch('https://coffee-store-server-nine-neon.vercel.app/coffees'),
        hydrateFallbackElement: <p>Loading...</p>,
        Component: Home,
      },
      {
        path: "/add-coffee",
        Component: AddCoffee
      },
      {
        path: "/update-coffee/:id",
        loader: ({params})=> fetch(`https://coffee-store-server-nine-neon.vercel.app/coffees/${params.id}`),
        hydrateFallbackElement: <p>Loading...</p>,
        Component: UpdateCoffee
      },
      {
        path:"/coffees/:id",
        loader: ({params})=> fetch(`https://coffee-store-server-nine-neon.vercel.app/coffees/${params.id}`),
        hydrateFallbackElement: <p>Loading...</p>,
        Component: CoffeeDetails,
      },
      {
        path: '/signin',
        Component: SignIn
      },
      {
        path: '/signup',
        Component: SignOut
      },
      {
        path: '/user-profile',
        loader: ()=> fetch('https://coffee-store-server-nine-neon.vercel.app/users'),
        hydrateFallbackElement: <p>Loading...</p>,
        Component: UserProfile,
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
