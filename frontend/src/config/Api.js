import axios from 'axios'

const Api = axios.create({
    headers: {
        "Content-type": "application/json",
        'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
     },
     baseURL: process.env.REACT_APP_BASE_URL,
  })

export default Api