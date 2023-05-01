import { useState, useEffect, useRef } from 'react';
import { getApiResource } from '@utils/network';
import { API } from '@api';
import { getAnyId, getAnyImg } from '@services/getPersonsData';
import { debounce } from 'lodash';

import { UiInput } from '../UI';
import { SearchResults } from '../SearchResults';

import styles from './SearchModule.module.css';
import { useCallback } from 'react';

export const SearchModule = () => {
     const [query, setQuery] = useState('');
     const [searchResutls, setSearchResults] = useState(null);
     const searchResultsRef = useRef(null);

     const getResponse = async param => {
          if (param) {
               const res = await getApiResource(API.getSearchPath() + param);
               const results = res.results.map(item => {
                    const id = getAnyId(item.url);
                    return {
                         id: id,
                         name: item.name,
                         img: getAnyImg(id),
                         link: `/person/${id}`
                    }
               });

               setSearchResults(results);
          } else {
               setSearchResults(null);
          }
     };

     const debouncedRes = useCallback(debounce(value => getResponse(value), 400), []);

     useEffect(() => {
          debouncedRes(query);
     }, [query]);  

     const handleOutsideClick = event => {
          if (!searchResultsRef.current) return;
          if (!searchResultsRef.current.contains(event.target)) {
               setQuery('');
               setSearchResults(null);
          }
     };

     useEffect(() => {
          if (!query) return;

          document.addEventListener('click', handleOutsideClick);

          return () => document.removeEventListener('click', handleOutsideClick);
     }, [query]);

     return (
          <div ref={searchResultsRef} className={`${styles.wrap} SearchModule`}>
               <UiInput value={query} setValue={setQuery}/> 
               <SearchResults results={searchResutls}/>
          </div>
     );
};

