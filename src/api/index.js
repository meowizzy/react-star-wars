export const API = {
    // common
    http: 'http://',
    https: 'https://',

    // swapi
    root: 'swapi.dev/api/',
    persons: 'people',

    // query
    pages: '/?page=',

    // visualguide
    imgRoot: 'https://starwars-visualguide.com/assets/img/',
    imgCategory: 'characters',
    imgExt: '.jpg',

    // methods
    getPersonsPath() {
        return this.https + this.root + this.persons + this.pages;
    },

    getPersonImg() {
        return this.imgRoot + this.imgCategory;
    }
};
