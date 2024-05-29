import axios from "axios";

const API_URL = '/api/routines/'

// Get Routines
const getRoutines = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Get Individual Routine Details
const getRoutine = async (routineId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL + `${routineId}`, config)

    return response.data
}

const createRoutine = async (routineData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, routineData, config)

    return response.data
}

const routineService = {
    getRoutines,
    getRoutine,
    createRoutine
}

export default routineService