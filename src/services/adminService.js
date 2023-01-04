// import axios from '../axios';
import axios from 'axios';
const getAllUsers = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users');
};

export { getAllUsers };
