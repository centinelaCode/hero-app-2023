import { Navigate, Route, Routes } from 'react-router-dom'


import { NavBar } from '../ui'
import { MarvelPage, DcPage } from '../heroes'
import { LoginPage } from '../auth'



export const AppRouter = () => {
  return (
    <>
      <NavBar />

      <Routes>
         <Route path="marvel" element={<MarvelPage />} />
         <Route path="dc" element={<DcPage />} />

         <Route path="login" element={<LoginPage />} />

         {/* ruta comodin */}
         <Route path="/" element={<Navigate to='/marvel' />} />
      </Routes>
    </>
  )
}

