import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import ContractForm from '../pages/ContractForm'
import Success from '../pages/Success'
import ContractsList from '../pages/ContractsList'
import EditContract from '../pages/EditContract'




export const router = createBrowserRouter([
  {
    element: <MainLayout />, // 👈 IMPORTANTE
    children: [
      { path: '/', element: <Home /> },
      { path: '/contract', element: <ContractForm /> },
      { path: '/contracts', element: <ContractsList /> },
      { path: '/success', element: <Success /> },
       { path: '/contracts/:id', element: <EditContract /> },
    ],
  },
])
