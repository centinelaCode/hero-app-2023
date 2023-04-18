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

  //! login
  const login = ( name = '' ) => {
    // se estable el usuario
    const user = { id: 'ABC', name }

    // establecemos la action
    const action = { type: types.login, payload: user }

    // guardamos al user en el localstorage
    localStorage.setItem('user', JSON.stringify( user ));
    
    // dispara una accion login 
    dispatch(action);
  }

  //! logout
  const logout = () => {
    // limpiamos el localstorage
    localStorage.removeItem('user');

    // establecemos la action
    const action = { type: types.logout}

    // dispara una accion logout
    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{ 
      ...authState,
      login: login,
      logout: logout
    }}>
      { children }
    </AuthContext.Provider>
  )
}
