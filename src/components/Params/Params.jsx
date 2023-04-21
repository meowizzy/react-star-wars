import PropTypes from 'prop-types';
import styles from './Params.module.css';


export const Params = ({ data }) => {
     return (
          data.length && 
          <ul className={styles.params}>
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
