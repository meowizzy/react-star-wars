import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getApiResource } from '@utils/network';
import { API } from '@api';
import { getPersonImg } from '@services/getPersonsData';
import Related from '@components/Related';

import Detailed from '@view/Detailed';

// import styles from './PersonPage.module.css';

const PersonPage = ({ setErrorApi }) => {
     const [personInfo, setPersonInfo] = useState(null);

     const match = useParams();
     
     useEffect(() => {
          
          (async () => {
               const res = await getApiResource(`${API.getPersonPath()}/${match.id}`);
               setPersonInfo(null);

               if (res) {
                    const img = getPersonImg(match.id);
                    const info = {
                         id: Number(match.id),
                         name: res.name,
                         img: img,
                         films: res.films,
                         species: res.species,
                         data: [
                              { title: 'Height', data: res.height },
                              { title: 'Mass', data: res.mass },
                              { title: 'Hair Color', data: res.hair_color },
                              { title: 'Eye color', data: res.eye_color },
                              { title: 'Birth year', data: res.birth_year },
                              { title: 'Skin color', data: res.skin_color },
                              { title: 'Gender', data: res.gender },
                         ]
                    };
                    
                    setPersonInfo(info);
                    setErrorApi(false);
               } else {
                    setErrorApi(true);
               }
          })();

     }, [match]);

     return (
          <>
               <Detailed obj={personInfo}/>

               <Related 
                    title="Related films" 
                    data={personInfo ? personInfo.films : Array(10).fill(1)} 
                    category="films"/>
               <Related 
                    title="Related species" 
                    data={personInfo ? personInfo.species : Array(10).fill(1)} 
                    category="species"/>
          </>
     );
};


PersonPage.propTypes = {
     setErrorApi: PropTypes.func
};

export default withErrorApi(PersonPage);