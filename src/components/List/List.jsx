import PropTypes from 'prop-types';
import ListItem from "../ListItem";
import { Loader } from '../Loader/Loader';

import styles from "./List.module.css";

export const List = ({ data, category, favBtn = true }) => {

     return (
          <ul className={styles.personsList}>
               {
                    data.map(({ id, name, img }, index) => (
                         id ? <ListItem favBtn={favBtn} key={id} name={name} img={img} id={id} category={category}/> : <Loader key={index} />
                    )) 
               }
          </ul>
     );
};


List.propTypes = {
     persons: PropTypes.array
};