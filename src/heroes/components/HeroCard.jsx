import { Link } from 'react-router-dom';

// crear un nuevo componente
const CharactersByHero = ({alter_ego, characters}) => {
   if(alter_ego === characters) return (<></>);
   return <p>{ characters }</p>
}

export const HeroCard = ({ 
   id,
   superhero,
   publisher,
   alter_ego,
   first_appearance,
   characters,
}) => {

   const heroImageUrl = `/assets/heroes/${id}.jpg`;

   // crear un jsx
   // const charactersByHero = (<p>{ characters }</p>);


   return (
      <div className="col animate__animated animate__fadeIn">
         <div className="card">

            <div className="row no-gutters">
               <div className="col-4">
                  {/* <img src="../../src/assets/heroes/dc-arrow.jpg" alt="" /> */}
                  <img src={ heroImageUrl } className="card-img" alt={ superhero } />
               </div>

               <div className="col-8">
                  <div className="card-body">
                     <h5 className="card-title">{superhero}</h5>
                     <p className="card-text">{alter_ego}</p>
                     
                     {/* { 
                        (alter_ego !== characters) && charactersByHero
                     } */}
                     <CharactersByHero 
                        characters={characters}                        
                        alter_ego={alter_ego}
                     />

                     <p className="card-text">
                        {/* <small><span className="badge rounded-pill bg-primary">{first_appearance}</span></small> */}
                        
                        <small className="text-muted">{ first_appearance }</small>
                     </p>
                     
                     <div className="d-grid gap-2">
                        <Link 
                           // className='btn btn-secondary btn-sm' 
                           type="button"
                           to={ `/hero/${id}` }
                        >Mas..
                        </Link>
                     </div>
                     
                  </div>
               </div>
            </div>
            

         </div>
      </div>
   )
}
