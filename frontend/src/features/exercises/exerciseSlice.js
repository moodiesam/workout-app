import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import exerciseService from "./exerciseService";

const initialState = {
    exercises: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Create new Exercise
export const createExercise = createAsyncThunk('exercises/create', async (exerciseData, thunkAPI) => {
    try {
        //get token to send for protected route using thunkAPI
        const token = thunkAPI.getState().auth.user.token
        return await exerciseService.createExercise(exerciseData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get Exercises
export const getExercises = createAsyncThunk('exercises/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await exerciseService.getExercises(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const exerciseSlice = createSlice({
    name: 'exercise',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createExercise.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createExercise.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.exercises.push(action.payload)
            })
            .addCase(createExercise.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getExercises.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getExercises.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.exercises = action.payload
            })
            .addCase(getExercises.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {reset} = exerciseSlice.actions
export default exerciseSlice.reducer