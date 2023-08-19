import axios from 'axios';
import {baseUrl} from './constants/constants'
const instance = axios.create({
    baseURL:baseUrl
});
// console.log("axios called")
export default instance