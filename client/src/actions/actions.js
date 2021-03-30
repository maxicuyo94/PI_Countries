import axios from 'axios';

const GET_PAGE = 'GET_PAGE';
const GET_START = 'GET_START';
const GET_BY_ID = 'GET_BY_ID';
const GET_ALL = 'GET_ALL'
const GET_BY_NAME = 'GET_BY_NAME'

export const getPage = (page, sort) => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:3001/api/countries?page=" + page + "&sort=" + sort)
        dispatch({ type: GET_PAGE, payload: res.data })
    }
}
export const getByName = (name, region, activity, justName) => {
    return async (dispatch) => {
        let res
        console.log(name)
        res = await axios.get("http://localhost:3001/api/countries?page=all")
        if (name) {
            res = await axios.get("http://localhost:3001/api/countries?name=" + name)
        }
        if (region) {
            Array.isArray(res.data) && (res.data = res.data.filter(c => c.region === region))
        }
        if (activity) {
            Array.isArray(res.data) && (res.data = res.data.filter(c => c.activities.filter(a => a.name === activity).length))
        }
        if (justName){
            Array.isArray(res.data) &&(res.data = res.data.map(c => c.name))
        }
        dispatch({ type: GET_BY_NAME, payload: res.data })
    }
}
export const getAll = () => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:3001/api/countries?page=all")
        dispatch({ type: GET_ALL, payload: res.data })
    }
}

export const getStart = () => {
    return async () => {
        const res = await axios.get("http://localhost:3001/api/countries")
        return { type: GET_START, payload: res.data }
    }

}
export const getById = (id) => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:3001/api/countries/" + id)
        dispatch({ type: GET_BY_ID, payload: res.data })
    }

}

