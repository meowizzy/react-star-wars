import React from "react";
import PropTypes from 'prop-types';

import styles from './PersonItem.module.css';


export const PersonItem = ({ img, name, url }) => {
     return (
          <li className={styles.personItem}>
               <a href="#">&nbsp;</a>
               <div className={styles.personItem__pic}>
                    <img src={img} alt={name} />
               </div>
               <p className={styles.personItem__name}>{name}</p>
          </li>
     );
};

PersonItem.propTypes = {
     img: PropTypes.string,
     name: PropTypes.string,
     url: PropTypes.string
};