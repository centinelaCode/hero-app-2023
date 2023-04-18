import { Route, Routes } from 'react-router-dom'

import { HeroesRoutes } from '../heroes'
import { LoginPage } from '../auth'
import { PriveteRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export const AppRouter = () => {
  return (
    <>
      <Routes>          

			{/* Routes Publics */} 
			<Route path="login" element={
				<PublicRoute>
					<LoginPage />
				</PublicRoute>
			} />			

			{/* Routes Privates */}
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

