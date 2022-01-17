import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-f84a5-default-rtdb.europe-west1.firebasedatabase.app/'
})