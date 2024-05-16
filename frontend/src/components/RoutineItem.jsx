import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { saveRoutine } from '../features/auth/authSlice'
import { useEffect } from "react"

function RoutineItem({ routine }) {
    // Check if user is admin. and if so, add edit/delete buttons to exercises

    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch function to get user set to state
        //should fire when saveRoutine is fired to update user in state
    })

    const onSave = e => {
        e.preventDefault()

        const newRoutine = {
            savedWorkouts: routine._id
        }

        dispatch(saveRoutine(newRoutine))

        // After saving the routine, we need to re-fetch the user 
        // to update the auth state

    }

    return (
        
            <div className="routine">
                <Link to={`/routine/${routine._id}`}>
                    <h2>{routine.title}</h2>
                </Link>
                <p>{routine.description}</p>
                <p>Duration: {routine.duration}</p>
                <button onClick={onSave} className="btn-save">Save Routine</button>
            </div>
        
    )
}

export default RoutineItem