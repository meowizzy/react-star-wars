import { ADD_PERSON_TO_FAVORITES, REMOVE_PERSON_FROM_FAVORITES, REMOVE_ALL_PERSONS_FROM_FAVORITES } from "../constants";

export const addPersonToFavorites = person => {
     return {
          type: ADD_PERSON_TO_FAVORITES,
          payload: person
     };
};

export const removePersonFromFavorites = personId => {
     return {
          type: REMOVE_PERSON_FROM_FAVORITES,
          payload: personId
     }
};

export const removeAllPersonsFromFavorites = () => {
     return {
          type: REMOVE_ALL_PERSONS_FROM_FAVORITES,
          payload: []
     }
};