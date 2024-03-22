import { Helmet, HelmetProvider } from 'react-helmet-async'
import { router } from './assets/routes'
import './global.css'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'


export function App() {

  return (
    <HelmetProvider>
      <Helmet  titleTemplate='%s | pizza.shop'/>
      <Toaster richColors />
      <RouterProvider router={router} />

    </HelmetProvider>
  )
}