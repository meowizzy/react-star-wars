import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import styles from './PageNavigation.module.css';

export const PageNavigation = ({ currentPage, items, category = '/persons' }) => {
     const pagesCount = Math.ceil(items / 10);    
     const prevPage = `${category}/${currentPage-1}`;
     const nextPage = `${category}/${currentPage+1}`;

     return (
          <div className={styles.container}>
               <Link to={prevPage} 
                    className={cn(styles.page_control, 
                         styles.prev_page, 
                         currentPage === 1 && styles.disabled)}>
                    Previous page
               </Link>  
               <Link to={nextPage} 
                    className={cn(styles.page_control, 
                         styles.next_page, 
                         currentPage === pagesCount && styles.disabled)}>
                    Next page
               </Link>
          </div>
     );
};


PageNavigation.propTypes = {
     currentPage: PropTypes.number,
     pagesCount: PropTypes.number
};


