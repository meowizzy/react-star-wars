import { NavLink, useParams } from 'react-router-dom';
import PropTypes from "prop-types";
import cn from 'classnames';
import { useSelector } from "react-redux";
import { useTheme } from '@context/ThemeProvider';

import styles from './MenuList.module.css';


export const MenuList = () => {
     // костыль
     const theme = useTheme();
     const param = useParams();
     const store = useSelector(state => state.favoritesReducer.persons);

     return (
          <nav className={ cn(styles.menu, styles[theme.theme])}>
               <ul className={styles.menu_list}>
                    <li className={styles.menu_item}>
                         <NavLink to="/" children="Home"/>
                    </li>
                    <li className={styles.menu_item}>
                         <NavLink to={`/persons/${param.page ? param.page : 1}`} children="Persons"/>
                    </li>
                    <li className={styles.menu_item}>
                         <NavLink to="/favorites" children={`Favorites ${store.length > 0 ? store.length : ''}`}/>
                    </li>
                    <li className={styles.menu_item}>
                         <NavLink to="/not-found" children="Not Found"/>
                    </li>
               </ul>
          </nav>
     );
};