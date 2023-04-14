import PropTypes from 'prop-types';
import cn from 'classnames';

import { Heading } from '../Heading/Heading';
import { Pagelist } from '../Pagelist/Pagelist';
import PageNavigation from '../PageNavigation';

import styles from './PagePanel.module.css';

export const PagePanel = ({ heading, headingClass = '', pageControls = {}, isLoading }) => {
     const { currentPage, items, category } = pageControls;
     const classes = cn(styles.container, {[styles.loading]: isLoading});

     return (
          <div className={classes}>
               <Heading children={heading} clasName={headingClass}/>
               {
                    Object.keys(pageControls).length > 0 && 
                         <div className={styles.controls}>
                              <Pagelist items={items} category={category}/>
                              <PageNavigation currentPage={currentPage} items={items} category={category}/>
                         </div>
               }
          </div>
     );
};

PagePanel.propTypes = {
     pageControls: PropTypes.object,
     heading: PropTypes.any
};
