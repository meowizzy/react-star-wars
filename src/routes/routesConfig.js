import HomePage from "@containers/HomePage";
import PersonsPage from "@containers/PersonsPage/PersonsPage";
import NotFountPage from "@containers/NotFoundPage";

const routesConfig = [
     {
          path: '/',
          element: <HomePage />    
     },
     {
          path: 'persons/:page',
          element: <PersonsPage/>
     },
     {
          path: '*',
          element: <NotFountPage />
     }
];


export default routesConfig;

