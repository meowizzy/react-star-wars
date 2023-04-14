import PropTypes from 'prop-types';
import PersonItem from "../PersonItem";
import { Loader } from '../Loader/Loader';

import styles from "./PersonsList.module.css";

export const PersonsList = ({ persons }) => {

     return (
          <ul className={styles.personsList}>
               {
                    persons.map(({ id, name, img }, index) => (
                         id ? <PersonItem key={id} name={name} img={img}/> : <Loader key={index} />
                    )) 
               }
          </ul>
     );
};


PersonsList.propTypes = {
     persons: PropTypes.array
};