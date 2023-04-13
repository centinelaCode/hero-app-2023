import { heroes } from "../data/heroes";

// recive el publisher: DC Comics / Marvel Comics
export const getHeroesByPublisher = ( publisher ) => {

   const validPublisher = ['DC Comics', 'Marvel Comics'];
   if(!validPublisher.includes(publisher)) {
      throw new Error(`${publiser} is not valid publisher`)
   }

   return heroes.filter( heroe => heroe.publisher === publisher );
}