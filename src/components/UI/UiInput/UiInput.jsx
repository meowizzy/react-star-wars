import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTheme } from '@context/ThemeProvider';
import cn from 'classnames';

import styles from './UiInput.module.css';


export const UiInput = ({ value, setValue, inputType = "text", placeholder = "Search", ...props }) => {
     const theme = useTheme();

     const handleInputChange = event => {
          const val = event.target.value;
          setValue(val);
     };

     return (
          <input className={cn(styles.input, styles[theme.theme], {
               [styles.active]: value !== ''
          })} type={inputType} placeholder={placeholder} value={value} onChange={handleInputChange} {...props} />
     )
};

UiInput.propTypes = {
     inputType: PropTypes.string,
     placeholder: PropTypes.string,
     value: PropTypes.string || PropTypes.number,
     setValue: PropTypes.func
};