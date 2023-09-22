import axios from 'axios'

const api = axios.create({
  baseURL: "https://lambe-a52d9-default-rtdb.firebaseio.com/",
})

export default api
