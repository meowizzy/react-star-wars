import { Link } from 'react-router-dom';
import PagePanel from '@components/PagePanel';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
     return (
          <>
               <PagePanel headingClass={styles.heading} heading={
                    <>
                         404<br />
                         Not Found!<br />
                         <Link to="/">Back to Home page</Link>
                    </>
               }/>
          </>
     );
};