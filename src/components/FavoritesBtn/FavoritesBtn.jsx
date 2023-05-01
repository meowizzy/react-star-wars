import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useDispatch, useSelector } from "react-redux";
import { addPersonToFavorites, removePersonFromFavorites } from "@store/actions";
import { useTheme } from '@context/ThemeProvider';

import styles from './FavoritesBtn.module.css';


export const FavoritesBtn = ({ obj, children, posA = false, ...props }) => {
     const store = useSelector(state => state.favoritesReducer.persons);
     const theme = useTheme();

     const dispatch = useDispatch();
     const [hasAddedToFavorites, setHasAddedToFavorites] = useState(false);

     const toggleFavorites = () => {
          if (hasAddedToFavorites) {
               dispatch(removePersonFromFavorites(obj.id));
          } else {
               dispatch(addPersonToFavorites({
                    id: obj.id,
                    name: obj.name,
                    img: obj.img
               }));
          }

          setHasAddedToFavorites(!hasAddedToFavorites);
     }

     useEffect(() => {
          if (store) {
               const currentObj = store.find(el => {
                    return Number(el.id) === Number(obj.id);
               });

               if (currentObj) {
                    setHasAddedToFavorites(true);
               } else {
                    setHasAddedToFavorites(false);
               }
          }    
     }, []);

     return (
          <button onClick={toggleFavorites} className={cn(styles.FavoritesBtn, {
               [styles.active]: hasAddedToFavorites,
               [styles.absolute]: posA
          }, styles[theme.theme])} {...props}>
               {children}
          </button>
     );
};


FavoritesBtn.propTypes = {
     children: PropTypes.string,
     obj: PropTypes.object,
     posA: PropTypes.bool
};



