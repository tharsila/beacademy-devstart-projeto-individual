import axios from 'axios'

export const ApiServiceSanctum = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})
