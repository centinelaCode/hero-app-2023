import { types } from '../types/types';

// const inicilState = {
//    logged: false,   
// }

export const authReducer = ( state = {}, action) => {
   switch (action) {
      case types.login:
         return {
            ...state,
            logged: true,
            name: action.payload
         };

      case types.logout:
         return {
            logged: false,
         };
   
      default:
         return state;
   }
}