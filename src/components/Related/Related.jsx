import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { getApiResource, changeProtocol } from '@utils/network';
import { getAnyId, getAnyImg } from '../../services/getPersonsData';
import { Heading } from '../Heading/Heading';
import List from '../List';

import styles from './Related.module.css';



export const Related = ({ title, data, category }) => {
     const [ items, setItems ] = useState(null);

     useEffect(() => {
          (async () => {
               setItems(null);
               
               if (typeof data[0] === 'string') {
                    const res = await Promise.all(data.map(url => {
                         return getApiResource(changeProtocol(url));
                    }));

                    const newData = res.map(item => {
                         const id = getAnyId(item.url, category);
                         const img = getAnyImg(id, category);

                         return {
                              id: id,
                              name: item.title || item.name,
                              img: img
                         };
                    });

                    setItems(newData);
               }
          })();
     }, [data]);

     return (
          typeof data[0] === 'string'  && 
               <>
                    <Heading>
                         { title }
                    </Heading>
                    <List data={items || data} category={`/${category}/`}/>
               </>
     );
};


Related.propTypes = {
     title: PropTypes.string,
     data: PropTypes.array,
     category: PropTypes.string
};
