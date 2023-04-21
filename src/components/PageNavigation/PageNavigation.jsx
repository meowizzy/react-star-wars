import PropTypes from 'prop-types';
import { UiButton } from '../UI';
import cn from 'classnames';

import styles from './PageNavigation.module.css';

export const PageNavigation = ({ classname, currentPage, items, category = '/persons', inList = true }) => {
     const pagesCount = Math.ceil(items / 10);    
     const prevPage = `${category}/${currentPage-1}`;
     const nextPage = `${category}/${currentPage+1}`;

     return (
          <div className={cn(styles.container, classname)}>
               <UiButton to={prevPage} disabled={currentPage === 1}>
                    Prev page
               </UiButton>   
               <UiButton to={nextPage} disabled={currentPage === (inList ? pagesCount : items)}>
                    Next page
               </UiButton>               
          </div>
     );
};


PageNavigation.propTypes = {
     currentPage: PropTypes.number,
     pagesCount: PropTypes.number,
     classname: PropTypes.string,
     inList: PropTypes.bool
};


