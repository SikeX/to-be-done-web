import axios from 'axios'

const baseUrl = 'http://localhost:3004/api'

const getAll = async () => {
    const result = await axios.get(baseUrl)
    return result.data
}

const getTodoList = async (todo) => {
    const result = await axios.get(`${baseUrl}/${todo}`)
    return result.data
}

const postTaskList = async (task) => {
    const result = axios.post(`${baseUrl}/Tasks`,task)
    return result
}

const postTodo = async (taskName,todo) => {
    const result = axios.post(`${baseUrl}/Tasks/${taskName}`,todo)
    return result
}

const deleteTodo = async (taskName) => {
    const result = axios.delete(`${baseUrl}/Tasks/${taskName}`)
    return result
}

export default {
    getAll: getAll,
    getTodoList: getTodoList,
    postTaskList: postTaskList,
    postTodo: postTodo,
    deleteTodo: deleteTodo
}