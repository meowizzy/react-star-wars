import { NavLink, useParams } from 'react-router-dom';
import PropTypes from "prop-types";
import cn from 'classnames';

import styles from './MenuList.module.css';


export const MenuList = ({ theme = 'dark' }) => {
     // костыль
     const param = useParams();

     return (
          <nav className={ cn(styles.menu, styles[theme])}>
               <ul className={styles.menu_list}>
                    <li className={styles.menu_item}>
                         <NavLink to="/" children="Home"/>
                    </li>
                    <li className={styles.menu_item}>
                         <NavLink to={`/persons/${param.page ? param.page : 1}`} children="Persons"/>
                    </li>
                    <li className={styles.menu_item}>
                         <NavLink to="/not-found" children="Not Found"/>
                    </li>
               </ul>
          </nav>
     );
};


MenuList.propTypes = {
     theme: PropTypes.string
};