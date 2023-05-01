import PropTypes from "prop-types";
import styles from './Detailed.module.css';
import cn from 'classnames';
import { useTheme } from '@context/ThemeProvider';

import { Heading } from "@components/Heading/Heading";
import PageNavigation from "@components/PageNavigation";
import Params from "@components/Params";
import { Loader } from "@components/Loader/Loader";
import { FavoritesBtn } from "@components/FavoritesBtn";

export const Detailed = ({ obj }) => {
     const theme = useTheme();
     
     return (
          <div className={styles.container}> 
               {
                    obj ? 
                         <>
                              <PageNavigation classname={styles.nav} currentPage={obj.id} items={82} category="/person" inList={false}/>
                              <div className={cn(styles.top, styles[theme.theme])}>
                                   <div className={cn(styles.left, !obj.img && styles.no_image)}>
                                        {
                                             obj.img && <img src={obj.img} alt={obj.name} />
                                        }
                                        <FavoritesBtn posA={true} obj={obj}>Добавить в избранное</FavoritesBtn>
                                   </div>
                                   <div className={styles.right}>     
                                        <Heading>{ obj.name }</Heading>
                                        <Params data={obj.data}/>
                                   </div>
                              </div>
                         </>
                    :
                    <div className={styles.top}>
                         <Loader inList={false}/>
                    </div>
                                   
               }
          </div>
     );
};


Detailed.propTypes = {
     obj: PropTypes.object
}