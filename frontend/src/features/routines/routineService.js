import axios from "axios";

const API_URL = '/api/routines'

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

const routineService = {
    getRoutines,
}

export default routineService