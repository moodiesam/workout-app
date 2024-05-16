import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { saveRoutine } from '../features/auth/authSlice'

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
            const newRoutine = {
                savedWorkouts: routine._id
            }

            dispatch(saveRoutine(newRoutine))
        }
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