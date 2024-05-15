import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import routineService from './routineService';

const initialState = {
    routines: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Get Routines

export const getRoutines = createAsyncThunk('routines/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await routineService.getRoutines(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
		return thunkAPI.rejectWithValue(message)
    }
})

// Get Routine Details
export const getRoutine = createAsyncThunk('routines/getOne', async (routineId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await routineService.getRoutine(routineId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
		return thunkAPI.rejectWithValue(message)
    }
})

export const routineSlice = createSlice({
    name: 'routine',
    initialState,
    reducers: {
        resetRoutines: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRoutines.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getRoutines.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.routines = action.payload
                // Sam - I think what's happening here is "state.excercises" is
                // getting converted from an array to something else, then the next time it's called it's not an array
            })
            .addCase(getRoutines.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getRoutine.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getRoutine.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.routines = action.payload
                // Sam - I think what's happening here is "state.excercises" is
                // getting converted from an array to something else, then the next time it's called it's not an array
            })
            .addCase(getRoutine.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {resetRoutines} = routineSlice.actions
export default routineSlice.reducer