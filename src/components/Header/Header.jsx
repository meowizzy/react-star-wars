import MenuList from '../MenuList';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { Logo } from '../Logo';
import { SearchModule } from '../SearchModule';

import styles from './Header.module.css';

export const Header = () => {
     return (
          <header className={styles.container}>
               <Logo />
               <MenuList />
               <SearchModule />
               <ThemeSwitcher />
          </header>
     )
};