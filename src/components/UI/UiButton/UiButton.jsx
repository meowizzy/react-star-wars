import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import styles from "./UiButton.module.css";

export const UiButton = ({ children, to, disabled = false, theme = 'dark', ...props }) => {
     const classes = cn(styles.button, disabled && styles.disabled, styles[theme])

     return (
          <Link className={classes} to={to} {...props}>
               { children }
          </Link>
     );
};


UiButton.propTypes = {
     children: PropTypes.string,
     to: PropTypes.string,
     disabled: PropTypes.bool,
};