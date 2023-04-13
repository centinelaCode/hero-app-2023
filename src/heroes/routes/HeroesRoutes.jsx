import { Route, Routes, Navigate } from 'react-router-dom'

import { NavBar } from '../../ui'
import { MarvelPage, DcPage } from '../pages'

export const HeroesRoutes = () => {
  return (
   <>
      <NavBar />

      <div className="container">
         <Routes>
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DcPage />} />

            {/* TODO: Search, HeroById */}
            <Route path="search" element={<DcPage />} />
            <Route path="hero" element={<DcPage />} />

            {/* ruta comodin */}
            <Route path="/" element={<Navigate to='/marvel' />} />
         </Routes>
      </div>

   </>
  )
}
