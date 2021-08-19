import axios from 'axios'

const baseUrl = 'http://localhost:3004/api'

const getAll = async () => {
    const result = await axios.get(baseUrl)
    return result.data
}

const postTaskList = async (task) => {
    const result = axios.post(`${baseUrl}/Tasks`,task)
    return result
}

const postTodo = async (todo) => {
    const result = axios.post(`${baseUrl}/Tasks/todo`,todo)
    return result
}

export default {
    getAll: getAll,
    postTaskList: postTaskList,
    postTodo: postTodo
}