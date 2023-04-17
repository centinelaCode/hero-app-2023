import { useReducer } from 'react'

import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'

const initialState = {
   logged: false,
}

export const AuthProvider = ({ children }) => {

  const [ authState, dispatch ] = useReducer(authReducer, initialState);


    // definimos la accion para establecer el login
  const login = ( name = '' ) => {
    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name: name
      }
    }
    
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
