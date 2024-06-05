import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { saveRoutine } from "../features/auth/authSlice"

function WorkoutItem({ workout }) {
    //add button to delete workout from saveWorkouts array

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const onRemove = e => {
        e.preventDefault()

        const newSavedWorkouts = user.savedWorkouts.filter((filteredItem) => filteredItem._id !== workout._id)

        const newRoutines = {
            savedWorkouts: newSavedWorkouts
        }

        dispatch(saveRoutine(newRoutines))
    }

    return (
            <div className="routine">
                <Link to={`/routine/${workout._id}`}>
                    <h3>{workout.title}</h3>
                </Link>
                <div>{workout.description}</div>
                <button onClick={onRemove} className="btn-action">Remove</button>
            </div>
    )
}

export default WorkoutItem