import { Helmet, HelmetProvider } from 'react-helmet-async'
import { router } from './assets/routes'
import './global.css'
import { RouterProvider } from 'react-router-dom'


export function App() {

  return (
    <HelmetProvider>
      <Helmet  titleTemplate='%s | pizza.shop'/>
      <RouterProvider router={router} />

    </HelmetProvider>
  )
}