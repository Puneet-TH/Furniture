import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 
import { createBrowserRouter } from "react-router";
import Home from './pages/Home'
import Shop from './pages/Shop'
import ContactUs from './pages/ContactUs.jsx'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import Login from './pages/Login'
import AuthLayout from './components/AuthLayout'
import Profile from './pages/Profile'
import Orders from './pages/Orders'
import ViewCatalog from './pages/ViewCatalog.jsx';
import ExploreCollection from './pages/ExploreCollection.jsx';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/shop',
        element: <Shop/>
      },
      {
        path: '/contactus',
        element: <ContactUs/>
      },
      {
        path: '/signup',
        element: <Signup/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
         path:'/ExploreCollection',
         element: <ExploreCollection/>
      },
      {
        path:'/ViewCatalog',
        element: <ViewCatalog/>
      },
      // Protected routes needs authentication
      {
        path: '/cart',
        element: (
          <AuthLayout authentication={true}>
            <Cart />
          </AuthLayout>
        )
      },
      {
        path: '/profile',
        element: (
          <AuthLayout authentication={true}>
            <Profile />
          </AuthLayout>
        )
      },
      {
        path: '/orders',
        element: (
          <AuthLayout authentication={true}>
            <Orders />
          </AuthLayout>
        )
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <RouterProvider router = {router}/>
  {/* </Provider> */}
  </StrictMode>,
)
