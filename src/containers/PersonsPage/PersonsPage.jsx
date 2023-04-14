import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import PersonsList from '@components/PersonsList';
import PagePanel from '@components/PagePanel';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
//import styles from './Persons.module.css';

import { API } from '@api';
import { getApiResource } from '@utils/network';
import { getPersonId, getPersonImg } from '@services/getPersonsData';


const PersonsPage = ({ setErrorApi }) => {
    const [personsList, setPersonsList] = useState(null);
    const [itemsCount, setItemsCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const params = useParams();
    const queryPage = params.page;

    const getResource = async () => {
        const res = await getApiResource(API.getPersonsPath()+queryPage);

        if (res) {
            const list = res.results.map(({ name, url }) => {
                const id = getPersonId(url);
                const img = getPersonImg(id);
                
                return { id, name, url, img };
            });
            
            setItemsCount(res.count);
            setPersonsList(list);
            setIsLoading(false);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        getResource();
    }, [queryPage]);

    return (
        <>
            <PagePanel 
                heading={"Persons"} 
                pageControls={{
                    currentPage: +queryPage,
                    items: itemsCount,
                    category: "/persons"
                }}
                isLoading={isLoading}
            />
            <PersonsList persons={!isLoading ? personsList : Array(10).fill(1)} />
        </>
    ); 
};


PersonsPage.propTypes = {
    setErrorApi: PropTypes.func
};

export default withErrorApi(PersonsPage);
