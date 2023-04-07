export const API = {
    root: 'https://swapi.dev/api/',
    persons: 'people',

    getPersonsApi() {
        return this.root + this.persons;
    }
};
