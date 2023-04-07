import React, { useState, useEffect } from 'react';
import { API } from '../../api';
import { getApiResource } from '../../utils/network';

import styles from './Persons.module.css';

export const Persons = () => {
    const [personsList, setPersonsList] = useState([]);

    const resource = async () => {
        const res = await getApiResource(API.getPersonsApi());
        const list = res.results.map(({ name, url }) => {
            return { name, url };
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
                    <li key={el.name}>{"name " + el.name + ", " + "url " + el.url}</li>
                ))
            :
                "Список пуст!"
            }
        </ul>
    ); 
};
