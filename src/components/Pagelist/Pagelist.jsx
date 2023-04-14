import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Pagelist.module.css';

export const Pagelist = ({ items, category = "/persons" }) => {
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
          <ul className={styles.container}>{links}</ul>
     );
};


Pagelist.propTypes = {
     count: PropTypes.number,
     category: PropTypes.string
};

