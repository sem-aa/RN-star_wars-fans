import axios from 'axios';
const URL = 'https://swapi.dev/api/people';

export const getAllHeroes = () =>
  axios
    .get(URL)
    .then(response => response.data)
    .catch(error => console.error('error from getAllHeroes', error));

export const getItems = (url: string) =>
  axios
    .get(url)
    .then(response => response.data)
    .catch(error => console.error('error from getItems', error));

export const searchPeople = (search: string) =>
  axios
    .get(`${URL}?search=${search}`)
    .then(response => response.data)
    .catch(error => console.log('error from searchPeople', error));
