import MenuList from '../MenuList';

import styles from './Header.module.css';

export const Header = () => {
     return (
          <header className={styles.container}>
               <MenuList />
          </header>
     )
};