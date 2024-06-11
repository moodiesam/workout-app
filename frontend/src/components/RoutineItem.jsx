import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { saveRoutine } from '../features/auth/authSlice'
import { deleteRoutine } from "../features/routines/routineSlice"
import SaveRoutine from "./SaveRoutine"

function RoutineItem({ routine }) {
    // Check if user is admin. and if so, add edit/delete buttons to exercises

    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

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
                <p>Duration: {routine.duration} minutes</p>
                <div className="actions">
                    <SaveRoutine routineId={routine._id} />
                    {user.id === "665f23b546e245811adb697f" ? (
                        <button onClick={onDelete} className="btn-action">Delete Routine</button>
                    ) : (<></>)}
                </div>
            </div>
        
    )
}

export default RoutineItem