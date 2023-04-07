import React, { useState, useEffect } from 'react';
import { API } from '../../api';
import { getApiResource } from '../../utils/network';
import { getPersonId, getPersonImg } from '../../services/getPersonsData';

import styles from './Persons.module.css';

export const Persons = () => {

    const [personsList, setPersonsList] = useState([]);

    const resource = async () => {
        const res = await getApiResource(API.getPersonsPath());
        const list = res.results.map(({ name, url }) => {
            const id = getPersonId(url);
            const img = getPersonImg(id);
            
            return { name, url, img };
        });

        setPersonsList(list);
    };

    useEffect(() => {
        resource();
    },[]);

    return (
        <ul>
            { personsList.length 
            ? 
                personsList.map(el => (
                    <li key={el.name}>
                        <span>{"name " + el.name + ", " + "url " + el.url}</span>
                        <img src={el.img} alt={el.name} />
                    </li>
                ))
            :
                "Список пуст!"
            }
        </ul>
    ); 
};
