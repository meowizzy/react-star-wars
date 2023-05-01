import ReactDOM from 'react-dom/client';
import App from '@containers/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ThemeProvider from '@context/ThemeProvider';

import '@styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <App /> 
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
);
