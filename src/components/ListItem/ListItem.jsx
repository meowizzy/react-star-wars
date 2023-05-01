import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FavoritesBtn } from "@components/FavoritesBtn";
import { useTheme } from '@context/ThemeProvider';
import cn from 'classnames';

import styles from './ListItem.module.css';


export const PersonItem = ({ img, name, id, category = '/person/', favBtn }) => {
     const theme = useTheme();

     return (
          <li className={cn(styles.personItem, styles[theme.theme])}>
               <Link to={`${category}${id}`} />
               <div className={styles.personItem__pic}>
                    <img src={img} alt={name} />
                    {
                         favBtn && <FavoritesBtn posA={true} obj={{img, name, id}}>Добавить в избранное</FavoritesBtn>
                    }
               </div>
               <p className={styles.personItem__name}>{name}</p>
          </li>
     );
};

PersonItem.propTypes = {
     img: PropTypes.string,
     name: PropTypes.string,
     url: PropTypes.string,
     favBtn: PropTypes.bool
};