import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers/getHeroeById";

export const HeroPage = () => {

  const { id } = useParams();
  const heroe = getHeroeById(id);
  // console.log(heroe);

  const navigate = useNavigate();
  const onNavigateBack = () => {
    navigate(-1);
  }

  if(!heroe) {
    // si no existe el heroe se redirecciona (manipula la url)
    return (<Navigate to='/marvel' />)
  }

  return (
    <div className='row mt-5'>
      <div className="col-4">
        <img 
          src={ `/assets/heroes/${id}.jpg` } 
          alt={ heroe.superhero }
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3>{ heroe.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>{heroe.alter_ego}</b></li>
          <li className="list-group-item"><b>{heroe.publisher}</b></li>
          <li className="list-group-item"><b>{heroe.first_appearance}</b></li>
        </ul>

        <h5 className="mt-3">Characters: </h5>
        <p>{ heroe.characters }</p>

        <button 
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >Back
        </button>
      </div>

    </div>
  )
}
