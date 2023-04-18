import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../auth';

export const PriveteRoute = ({ children }) => {

   const { logged } = useContext( AuthContext);

   // obtenemos el ultimo path usado
   const { pathname, search }  = useLocation();   
   const lastPath = pathname + search;
   // console.log(lastPath)

   // lo guardamos en localstorage
   localStorage.setItem('lastPath', lastPath);
   // console.log('rerender')
   


   return (logged)
      ? children
      : <Navigate to="/login" />
}
