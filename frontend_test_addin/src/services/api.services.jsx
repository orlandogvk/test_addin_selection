import axios from 'axios'
const { BASE_URL_SERVER } = process.env

export const api = axios.create({
    baseURL: BASE_URL_SERVER
})