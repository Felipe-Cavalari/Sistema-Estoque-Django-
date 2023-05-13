import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//configurando o router no react
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom'

import Home from './routes/home.jsx'
import Login from './routes/login.jsx'
import Produtos from './routes/produtos.jsx'
import ErrorPage from './routes/404.jsx'

// const router = createBrowserRouter([
//   {path: '/', element: <Home />, },
//   {path: '/login', element: <Login />, },

// ])

const isLogged = true

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {path: '/', element: <Home />, },
      {path: '/login', element: <Login />, },
      {path: '/produtos', element: <Produtos />, },
    ] 
  
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
