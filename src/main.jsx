import ReactDOM from 'react-dom/client'


import './index.css'
import Home from './views/Home/Home'
import { Route, Router, RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
   element: <Home />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />)
