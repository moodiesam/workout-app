import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { saveRoutine } from '../features/auth/authSlice'
import { deleteRoutine } from "../features/routines/routineSlice"

function RoutineItem({ routine }) {
    // Check if user is admin. and if so, add edit/delete buttons to exercises

    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    const onSave = e => {
        e.preventDefault()

        const result = user.savedWorkouts.filter((workout) => workout._id === routine._id)

        if(result[0]) {
            console.log("Routine already saved")
        } else {
            let updatedRoutines = user.savedWorkouts.map((workout) => workout._id)
            updatedRoutines.push(routine._id)

            const newRoutine = {
                savedWorkouts: updatedRoutines
            }

            dispatch(saveRoutine(newRoutine))
        }
    }

    const onDelete = e => {
        e.preventDefault()

        dispatch(deleteRoutine(routine._id))
    }

    return (
        
            <div className="routine">
                <Link to={`/routine/${routine._id}`}>
                    <h2>{routine.title}</h2>
                </Link>
                <p>{routine.description}</p>
                <p>Duration: {routine.duration}</p>
                <div className="actions">
                    <button onClick={onSave} className="btn-action">Save Routine</button>
                    <button onClick={onDelete} className="btn-action">Delete Routine</button>
                </div>
            </div>
        
    )
}

export default RoutineItem