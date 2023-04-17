import { useReducer } from 'react'

import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'

// const initialState = {
//     logged: false,
// }

const init = () => {
  const user = JSON.parse( localStorage.getItem('user') )

  return {
    logged: !!user,
    user,
  }
}

export const AuthProvider = ({ children }) => {

  const [ authState, dispatch ] = useReducer(authReducer, {}, init);

  // definimos la accion para establecer el login
  const login = ( name = '' ) => {

    const user = { id: 'ABC', name }

    const action = {
      type: types.login,
      payload: user
    }

    // guardamos al user en el localstorage
    localStorage.setItem('user', JSON.stringify( user ));
    
    // dispara una accion que se definio previamente
    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{ 
      ...authState,
      login: login
    }}>
      { children }
    </AuthContext.Provider>
  )
}
