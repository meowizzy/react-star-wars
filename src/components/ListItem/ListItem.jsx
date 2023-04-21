import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './ListItem.module.css';


export const PersonItem = ({ img, name, id, category = '/person/' }) => {
     return (
          <li className={styles.personItem}>
               <Link to={`${category}${id}`} />
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