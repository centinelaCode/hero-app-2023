import { heroes } from "../data/heroes";

// recive el id (example id: dc-green )
export const getHeroeById = ( id ) => {   
   return heroes.find( heroe => heroe.id === id );
}