import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 
import { createBrowserRouter } from "react-router";
import Home from './pages/Home'
import Shop from './pages/Shop'
import ContactUs from './pages/ContactUs.jsx'
import Signup from './pages/Signup'
import Login from './pages/Login'
import AuthLayout from './components/AuthLayout'
import Orders from './pages/Orders'
import ViewCatalog from './pages/ViewCatalog.jsx';
import ExploreCollection from './pages/ExploreCollection.jsx';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import Store from './components/store/Store.js'

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
    <Provider store={Store}>
      <RouterProvider router = {router}/>
    </Provider>
  </StrictMode>,
)
