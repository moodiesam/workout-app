import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import routineService from './routineService';

const initialState = {
    routines: [],
    newRoutine: [],
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

// Add Exercise to newRoutine
export const addToNewRoutine = createAsyncThunk('newRoutine/addExercise', async (exerciseData, thunkAPI) => {
    // Check if exercise already there?
    return exerciseData
})

// Remove Exercise from newRoutine
export const removeFromNewRoutine = createAsyncThunk('newRoutine/removeExercise', async (exerciseData, thunkAPI) => {
    return exerciseData
}  )

// Rearrange newRoutine
export const rearrangeNewRoutine = createAsyncThunk('newRoutine/rearrange', async (exerciseData, thunkAPI) => {
    return exerciseData
})

// Create New Routine
export const createRoutine = createAsyncThunk('routines/create', async (routineData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await routineService.createRoutine(routineData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
		return thunkAPI.rejectWithValue(message)
    }
})

// Delete Routine
export const deleteRoutine = createAsyncThunk('routines/delete', async(routineId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await routineService.deleteRoutine(routineId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
		return thunkAPI.rejectWithValue(message)
    }
})

export const routineSlice = createSlice({
    name: 'routine',
    initialState,
    reducers: {
        resetRoutines: (state) => {
            state.routines = []
            state.isError = false
            state.isSuccess = false
            state.isLoading = false
            state.message = ''
        },
        resetNewRoutine: (state) => {
            state.routines = []
            state.newRoutine = []
            state.isError = false
            state.isSuccess = false
            state.isLoading = false
            state.message = ''
        }
        
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
            })
            .addCase(getRoutine.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(addToNewRoutine.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addToNewRoutine.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.newRoutine.push(action.payload)
            })
            .addCase(addToNewRoutine.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
            })
            .addCase(removeFromNewRoutine.pending, (state) => {
                state.isLoading = true
            })
            .addCase(removeFromNewRoutine.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                let filteredRoutine = state.newRoutine.filter((exercise) => exercise.id !== action.payload)
                state.newRoutine = filteredRoutine
            })
            .addCase(removeFromNewRoutine.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
            })
            .addCase(rearrangeNewRoutine.pending, (state) => {
                state.isLoading = true
            })
            .addCase(rearrangeNewRoutine.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.newRoutine = action.payload
            })
            .addCase(rearrangeNewRoutine.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
            })
            .addCase(createRoutine.pending, (state) => {
				state.isLoading = true
			})
			.addCase(createRoutine.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				// check to make sure it's an array, and if not, make it an array
				// see my comment below for what I think might be happening
				if (!Array.isArray(state.routines)) {
					state.routines = [];
				}
				state.routines.push(action.payload)
			})
			.addCase(createRoutine.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
            })
            .addCase(deleteRoutine.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteRoutine.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                let filteredRoutines = state.routines.filter((routine) => routine._id !== action.payload)
                state.routines = filteredRoutines
            })
            .addCase(deleteRoutine.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {resetRoutines, resetNewRoutine} = routineSlice.actions
export default routineSlice.reducer