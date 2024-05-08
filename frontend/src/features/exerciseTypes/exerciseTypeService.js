import axios from "axios";

const API_URL = '/api/exerciseTypes/'

// Get Exercise Types

const getExerciseTypes = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    
    return response.data
}

const exerciseTypeService = {
    getExerciseTypes,
}

export default exerciseTypeService