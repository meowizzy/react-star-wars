import React, { useContext, useState } from 'react';

export const DEFAULT_THEME = "DEFAULT_THEME";
export const LIGHT_THEME = "LIGHT_THEME";

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children, ...props }) => {
     const [currentTheme, setTheme] = useState(DEFAULT_THEME);
     const root = document.querySelector(':root');

     const changeTheme = themeName => {
          setTheme(themeName);
          localStorage.setItem('APP_THEME', themeName);
          
          switch(themeName) {
               case LIGHT_THEME:
                    root.style.setProperty('--color-root-bg', 'var(--color-light-gray)');     
                    break;
               case DEFAULT_THEME:
                    root.style.setProperty('--color-root-bg', 'var(--color-black)');     
                    break;
               default: 
                    root.style.setProperty('--color-root-bg', 'var(--color-black)');    
          }          
     };

     return (
          <ThemeContext.Provider
               value={{
                    theme: currentTheme,
                    setTheme: changeTheme
                    
               }}
               {...props}
          >
               {children}
          </ThemeContext.Provider>
     )
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext); 