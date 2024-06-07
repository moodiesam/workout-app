import axios from "axios";

const API_URL = '/api/exercises/'

// Create new exercise
const createExercise = async (exerciseData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, exerciseData, config)

    return response.data
}

// Get Exercises
const getExercises = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Get Individual Exercise Details
const getExercise = async (exerciseId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL + `${exerciseId}`, config)

    return response.data
}

// Get Exercises By Type
const getExercisesByType = async (exerciseTypeId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL + 'type/' + `${exerciseTypeId}`, config)

    return response.data
}

const exerciseService = {
    createExercise,
    getExercises,
    getExercise,
    getExercisesByType
}

export default exerciseService