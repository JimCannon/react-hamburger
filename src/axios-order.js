import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-hamburgerz.firebaseio.com/'
});

export default instance;