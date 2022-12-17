import axios from 'axios'
// const { BASE_URL_SERVER } = process.env
export const api = axios.create({
    baseURL: 'http://localhost:8000/api/v1/'
})