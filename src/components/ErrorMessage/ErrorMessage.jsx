import PropTypes from 'prop-types';
import styles from './ErrorMessage.module.css';

export const ErrorMessage = ({ children = "Error" }) => {
     return (
          <h2 className={styles.ErrorMessage}>{children}</h2>
     ) 
};


ErrorMessage.propTypes = {
     children: PropTypes.string || PropTypes.array
};