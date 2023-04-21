import { API } from "@api";


export const changeProtocol = url => {
    return url.includes(API.http) ? url.replace(API.http, API.https) : url;
};


export const getApiResource = async (uri) => {
    
    try {
        const res = await fetch(uri);

        if (!res.ok) {
            console.error(`Could not fetch. ${res.status}`);

            return false;
        }

        return await res.json();
    } catch(e) {
        console.error(`Could not fetch. ${e.message}`);
        return false;
    }

};


