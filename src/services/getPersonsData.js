import { API } from "../api";

const getId = (url, category) => {
    const protocol = url.includes(API.http) ? API.http : API.https;

    const id = url
        .replace(protocol+API.root+category, '')
        .replace(/\//g, '');

    return id;
};


export const getPersonId = url => getId(url, API.persons);

export const getPersonImg = id => `${API.getPersonImg()}/${id+API.imgExt}`;