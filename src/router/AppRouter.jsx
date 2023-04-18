import { Route, Routes } from 'react-router-dom'

import { HeroesRoutes } from '../heroes'
import { LoginPage } from '../auth'
import { PriveteRoute } from './PrivateRoute'


export const AppRouter = () => {
  return (
    <>
      <Routes>          

          <Route path="login" element={<LoginPage />} />

          {/* Routes private */}
          <Route path="/*" element={
            <PriveteRoute>
              <HeroesRoutes />
            </PriveteRoute>
          } />
          
          {/* <Route path="/*" element={<HeroesRoutes />} />           */}

      </Routes>
    </>
  )
}

