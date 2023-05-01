import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useTheme } from '@context/ThemeProvider';

import styles from "./UiButton.module.css";

export const UiButton = ({ children, to, disabled = false, ...props }) => {
     const theme = useTheme();
     const classes = cn(styles.button, disabled && styles.disabled, styles[theme.theme])

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