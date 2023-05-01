import { Route, Routes } from 'react-router-dom'; 
import { useTheme } from '@context/ThemeProvider';
import routesConfig from '@routes/routesConfig';
import Layout from '@layouts/Layout';
import './App.css';
import { useEffect } from 'react';

function App() {
  const theme = useTheme();
  const storageTheme = localStorage.getItem('APP_THEME');

  useEffect(() => {
    if (storageTheme) theme.setTheme(storageTheme);
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Layout />}>
            {
              routesConfig.map((route, index) => (
                <Route key={index} path={route.path} element={route.element}/>
              ))
            }
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
