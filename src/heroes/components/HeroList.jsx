import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../helpers"

export const HeroList = ({ publisher }) => {

   const heroes = getHeroesByPublisher( publisher );
   // console.log(heroes)

   return (
      <div className="row row-cols-1 row-cols-md-3 g-3">
         
         { 
            heroes.map(heroe => (
               <HeroCard 
                  key={ heroe.id }
                  { ...heroe }
               />
            )) 
         }

      </div>
   )
}
