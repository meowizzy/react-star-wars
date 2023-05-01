import { ADD_PERSON_TO_FAVORITES, REMOVE_PERSON_FROM_FAVORITES, REMOVE_ALL_PERSONS_FROM_FAVORITES } from "../constants";
import { getLocalStorage } from "@utils/localStorage";

const initialState = {
     persons: getLocalStorage("favorites")
};


const addPerson = (state, action) => {
     const person = state.persons.find(el => el.id === action.payload.id);

     if (!person) {
          return [...state.persons, action.payload];
     }

     alert("This person has already been added to favorites");
     return [...state.persons];
};


const removePerson = (state, id) => {
     return [...state.persons.filter(item => Number(item.id) !== Number(id))];
};


export const favoritesReducer = (state = initialState, action) => {
     switch(action.type) {
          case ADD_PERSON_TO_FAVORITES:
               return {
                    persons: addPerson(state, action)
               };
          case REMOVE_PERSON_FROM_FAVORITES: 
               return {
                    persons: removePerson(state, action.payload)
               }
          case REMOVE_ALL_PERSONS_FROM_FAVORITES: 
               return {
                    persons: []
               }
          default:
               return state;
     }
};