import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import ErrorPage from './routes/error-page.tsx'
import './index.css'
import Login from './routes/Login.tsx'
import App from './routes/App.tsx'
import { Root } from './routes/Root.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/login',
        element: <Login />,
        errorElement: <ErrorPage />
      },
      {
        path: '/movies',
        element: <App />,
        errorElement: <ErrorPage />
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
