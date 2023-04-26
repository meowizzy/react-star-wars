import PropTypes from "prop-types";
import styles from './Detailed.module.css';
import cn from 'classnames';
import { addPersonToFavorites, removePersonFromFavorites } from "@store/actions";
import { useDispatch } from "react-redux";

import { Heading } from "@components/Heading/Heading";
import PageNavigation from "@components/PageNavigation";
import Params from "@components/Params";
import { Loader } from "@components/Loader/Loader";

export const Detailed = ({ obj }) => {
     const dispatch = useDispatch();

     const addToFavorites = () => {
          dispatch(addPersonToFavorites({
               id: obj.id,
               name: obj.name,
               img: obj.img
          }));
     };


     const removeFromFavorites = () => {
          dispatch(removePersonFromFavorites(obj.id))
     };
     return (
          <div className={styles.container}> 
               {
                    obj ? 
                         <>
                              <PageNavigation classname={styles.nav} currentPage={obj.id} items={82} category="/person" inList={false}/>
                              <div className={styles.top}>
                                   <div className={cn(styles.left, !obj.img && styles.no_image)}>
                                        {
                                             obj.img && <img src={obj.img} alt={obj.name} />
                                        }
                                   </div>
                                   <div className={styles.right}>     
                                        <Heading>{ obj.name }</Heading>
                                        <Params data={obj.data}/>
                                        <button onClick={addToFavorites}>Добавить в избранные</button>
                                        <button onClick={removeFromFavorites}>Удалить из избранных</button>
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