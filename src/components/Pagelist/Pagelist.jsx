import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Pagelist.module.css';
import cn from "classnames";
import { useTheme } from '@context/ThemeProvider';

export const Pagelist = ({ items, category = "/persons" }) => {
     const theme = useTheme();
     const pages = Math.ceil(items / 10);
     
     const links = Array(pages)
          .fill(1)
          .map((_, index) => (
          <li key={index} className={styles.container_item}>
               <NavLink to={`${category}/${index+1}`}>
                    <span>{index+1}</span>
               </NavLink>
          </li>
     ));

     return (
          <ul className={cn(styles.container, styles[theme.theme])}>{links}</ul>
     );
};


Pagelist.propTypes = {
     count: PropTypes.number,
     category: PropTypes.string
};

