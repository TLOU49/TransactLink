import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom' 
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route element={<MainLayout/>}>
      <Route path='/' index element={<Home/>}/>
    </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
