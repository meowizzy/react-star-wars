import { Route, Routes } from 'react-router-dom'; 
import routesConfig from '@routes/routesConfig';
import Layout from '@layouts/Layout';
import './App.css';

function App() {
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
