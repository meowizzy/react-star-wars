import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useTheme } from '@context/ThemeProvider';
import cn from 'classnames';
import { removeAllPersonsFromFavorites } from '@store/actions';

import { Heading } from '@components/Heading/Heading';
import List from '@components/List';

import styles from './FavoritesPage.module.css';

export const FavoritesPage = () => {
     const dispatch = useDispatch();
     const theme = useTheme();
     const favorites = useSelector(state => state.favoritesReducer.persons);
     const removeAllFavorites = () => {
          dispatch(removeAllPersonsFromFavorites());
     };

     return (
          <>
               <div className={styles.header}>
                    <Heading children="Favorites"/>
                    {
                         favorites.length 
                         ? <button className={cn(styles.clearFavoritesBtn, styles[theme.theme])} onClick={removeAllFavorites}>
                              <span>Remove favorites</span>
                              <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M5 5L19 19M5 19L19 5" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                         </button>
                         :""
                         
                    }
               </div>
               {
                    favorites.length ? <List data={favorites}/> : <Heading children="You have no favorites"/>
               }
          </>
     );
};