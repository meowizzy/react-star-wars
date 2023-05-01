import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { favoritesReducer } from "./reducers/favoritesReducer";
import { setLocalStorage } from "@utils/localStorage";

const rootReducer = combineReducers({
     favoritesReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
     const favorites = JSON.stringify(store.getState().favoritesReducer.persons);

     setLocalStorage("favorites", favorites);
});

export default store;