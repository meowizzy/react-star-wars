export const API = {
    // common
    http: 'http://',
    https: 'https://',

    // swapi
    root: 'swapi.dev/api/',
    persons: 'people',
    films: 'films',
    species: 'species',

    // query
    pages: '/?page=',

    // visualguide
    imgRoot: 'https://starwars-visualguide.com/assets/img/',
    imgCategories: {
        personsImg: 'characters',
        filmsImg: 'films',
        speciesImg: 'species'
    },
    imgExt: '.jpg',

    // methods
    getPersonsPath() {
        return this.https + this.root + this.persons + this.pages;
    },

    getPersonPath() {
        return this.https + this.root + this.persons;
    },

    getFilmPath() {
        return this.https + this.root + this.films
    },

    getImgPath(category = this.imgCategories.personsImg) {
        switch(category) {
            case 'films':
                return this.imgRoot + this.imgCategories.filmsImg;
            case 'species':
                return this.imgRoot + this.imgCategories.speciesImg;
            default:
                return this.imgRoot + category;   
        }
    }
};
