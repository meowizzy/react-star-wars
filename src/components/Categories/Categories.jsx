import characters from './images/characters.jpg';
import films from './images/films.jpg';
import species from './images/species.jpg';
import styles from './Categories.module.css';
import { Link } from 'react-router-dom';


export const Categories = () => {
     return (
          <ul className={styles.items}>
               <li key={1}>
                    <Link to="/persons/1"/>
                    <div className="pic">
                         <img src={characters} alt="characters" />
                    </div>
                    <p>Characters</p>
               </li>
               <li key={2}>
                    <div className="pic">
                         <img src={films} alt="films" />
                    </div>
                    <p>Films</p>
               </li>
               <li key={3}>
                    <div className="pic">
                         <img src={species} alt="species" />
                    </div>
                    <p>Species</p>
               </li>
          </ul>
     )
};