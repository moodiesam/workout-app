import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import exerciseTypeService from "./exerciseTypeService";

const initialState = {
    exerciseTypes: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const getExerciseTypes = createAsyncThunk('exerciseTypes/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await exerciseTypeService.getExerciseTypes(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get Exercise Type Details
export const getExerciseType = createAsyncThunk('exerciseType/getDetails', async (exerciseTypeId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await exerciseTypeService.getExerciseType(exerciseTypeId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const exerciseTypeSlice = createSlice({
    name: 'exerciseType',
    initialState,
    reducers: {
        resetExerciseTypes: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(getExerciseTypes.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getExerciseTypes.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.exerciseTypes = action.payload
        })
        .addCase(getExerciseTypes.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getExerciseType.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getExerciseType.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.exerciseTypes = action.payload
        })
        .addCase(getExerciseType.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const {resetExerciseTypes} = exerciseTypeSlice.actions
export default exerciseTypeSlice.reducer