import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  // usamos el useContext
  const { login } = useContext( AuthContext )
  const navigate = useNavigate();

  const onLogin = () => {
    // console.log(user)
    
    // verificamos si existe un lastaPath si no solo obtenemos el la ruta principal ("/")
    const lastPath = localStorage.getItem('lastPath') || '/';

    // hacemos el dispach de la cacion login y le pasamoes el name
    login('Raul Valdez');


    navigate(lastPath, {
      replace: true
    })  
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      
      <button 
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login
      </button>

    </div>
  )
 }
 