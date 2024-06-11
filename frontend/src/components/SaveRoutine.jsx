import { useDispatch, useSelector } from "react-redux"
import { saveRoutine } from '../features/auth/authSlice'


function SaveRoutine({routineId}) {
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    const onSave = e => {
        e.preventDefault()

        const result = user.savedWorkouts.filter((workout) => workout._id === routineId)

        if(result[0]) {
            alert("Routine already saved to profile")
        } else {
            let updatedRoutines = user.savedWorkouts.map((workout) => workout._id)
            updatedRoutines.push(routineId)

            const newRoutine = {
                savedWorkouts: updatedRoutines
            }

            dispatch(saveRoutine(newRoutine))
        }
    }

    return <>
        <button onClick={onSave} className="btn-action">Save Routine</button>
    </>
}

export default SaveRoutine