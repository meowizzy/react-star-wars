import PropTypes from 'prop-types';
import cn from 'classnames';
import { useTheme } from '@context/ThemeProvider';

import styles from './Heading.module.css';


export const Heading = ({ children, clasName, ...props }) => {
     const theme = useTheme();

     return (
          <h1 className={cn(styles.heading, styles[theme.theme], clasName)} {...props}>
               {children}
          </h1>
     )
};


Heading.propTypes = {
     children: PropTypes.node
}


