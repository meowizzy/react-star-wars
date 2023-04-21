import { API } from "@api";

const getId = (url, category) => {
    const protocol = url.includes(API.http) ? API.http : API.https;

    const id = url
        .replace(protocol+API.root+category, '')
        .replace(/\//g, '');

    return id;
};


export const getPersonId = url => getId(url, API.persons);

export const getPersonImg = id => `${API.getImgPath()}/${id+API.imgExt}`;

export const getFilmImg = id => `${API.getImgPath('films')}/${id+API.imgExt}`;

export const getFilmId = url => getId(url, API.films);

export const getSpeciesImg = id => `${API.getImgPath('species')}/${id+API.imgExt}`;

export const getAnyId = (url, category = API.persons) => {
    switch(category) {
        case "films":
            return getId(url, API.films);
        case "species":
            return getId(url, API.species);
        default:
            return getId(url, category);
    }
};


export const getAnyImg = (id, category = API.persons) => {
    switch(category) {
        case "films":
            return getFilmImg(id);
        case "species":
            return getSpeciesImg(id);
        default:
            return getPersonImg(id);
    }
}