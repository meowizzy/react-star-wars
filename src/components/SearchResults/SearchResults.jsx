import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useTheme } from '@context/ThemeProvider';
import styles from './SearchResults.module.css';


export const SearchResults = ({ results, ...props }) => {
     const theme = useTheme();

     return ( results 
          ?
          <div className={cn(styles.results, styles[theme.theme])} {...props}>
               {
                    <ul className={styles.list}>
                         {
                              results.map(item => (
                                   <li className={styles.item} key={item.id}>
                                        <Link to={item.link}>
                                             <img src={item.img} alt={item.name} />
                                             <p>{item.name}</p>
                                        </Link>
                                   </li>
                              ))
                         }
                    </ul>    
               }
          </div> 
          : ''
     );
};