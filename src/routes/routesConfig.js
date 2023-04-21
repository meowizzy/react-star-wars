import HomePage from "@containers/HomePage";
import PersonsPage from "@containers/PersonsPage/PersonsPage";
import PersonPage from "@containers/PersonPage/PersonPage";
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
          path: 'person/:id',
          element: <PersonPage/>
     },
     {
          path: '*',
          element: <NotFountPage />
     }
];


export default routesConfig;

