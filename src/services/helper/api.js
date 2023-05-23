import axios from 'axios'
export default axios.create({
  baseURL: 'https://20.249.98.2:8712/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
