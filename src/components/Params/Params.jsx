import PropTypes from 'prop-types';
import cn from 'classnames';
import { useTheme } from '@context/ThemeProvider';

import styles from './Params.module.css';



export const Params = ({ data }) => {
     const theme = useTheme();

     return (
          data.length && 
          <ul className={cn(styles.params, styles[theme.theme])}>
               {
                    data.map(({ title, data }) => (
                         <li key={title}>
                              <span className={styles.params_title}>{title}:</span>
                              <span className={styles.params_body}>{data}</span>
                         </li>
                    ))
               }
          </ul>
     );
};


Params.propTypes = {
     obj: PropTypes.object
};
