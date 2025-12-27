import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import Navbar from './components/Navbar'
import FloatingContracts from './components/FloatingContracts'

export default function App() {
  return (
    <>
    <Navbar />
    <RouterProvider router={router} />
    <FloatingContracts />
    </>

  )
}

