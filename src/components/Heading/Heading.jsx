import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Heading.module.css';


export const Heading = ({ children, clasName, ...props }) => {
     return (
          <h1 className={cn(styles.heading, clasName)} {...props}>
               {children}
          </h1>
     )
};


Heading.propTypes = {
     children: PropTypes.node
}


