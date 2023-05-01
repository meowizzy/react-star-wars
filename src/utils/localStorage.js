export const getLocalStorage = key => {
     const data = localStorage.getItem(key);
     if (data !== null) {
          return JSON.parse(JSON.parse(data));
     }
     
     return [];
};

export const setLocalStorage = (key, value) => {
     localStorage.setItem(key, JSON.stringify(value));
}