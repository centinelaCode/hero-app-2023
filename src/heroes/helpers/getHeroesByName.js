import { heroes } from "../data/heroes";

// recive el name
export const getHeroesByName = ( name = '' ) => {
   
   // conevrtimos el name a minusculas y quitamos espacios al inico y al final
   name = name.toLowerCase().trim();

   // si name esta vacio devolvemos una array vacio
   if( name.length === 0 ) return [];

   return heroes.filter(
      heroe => heroe.superhero.toLocaleLowerCase().includes( name )
   )
}