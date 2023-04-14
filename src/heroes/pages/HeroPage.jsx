import { Navigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers/getHeroeById";

export const HeroPage = () => {

  const { id } = useParams();
  const heroe = getHeroeById(id);
  // console.log(heroe);

  if(!heroe) {
    // si no existe el heroe se redirecciona (manipula la url)
    return (<Navigate to='/marvel' />)
  }

  return (
    <>
      
    </>
  )
}
