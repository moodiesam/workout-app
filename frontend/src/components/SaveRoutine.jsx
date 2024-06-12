import { useDispatch, useSelector } from "react-redux"
import { saveRoutine } from '../features/auth/authSlice'
import { useEffect } from "react"


function SaveRoutine({routineId}) {
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    const result = user.savedWorkouts.filter((workout) => workout._id === routineId)

    useEffect(() => {
        if(result[0]) {
            let alreadySaved = document.getElementById(routineId)
            alreadySaved.classList.add("added")
            alreadySaved.innerHTML = "Routine Saved"
        }
    }, [result, routineId])

    const onSave = e => {
        e.preventDefault()

        if(result[0]) {
            alert("Routine already saved to profile")
        } else {
            let added = document.getElementById(routineId)
            added.classList.add("added")
            let updatedRoutines = user.savedWorkouts.map((workout) => workout._id)
            updatedRoutines.push(routineId)

            const newRoutine = {
                savedWorkouts: updatedRoutines
            }

            dispatch(saveRoutine(newRoutine))
        }
    }

    return <>
        <button onClick={onSave} id={routineId} className="btn-action">Save Routine</button>
    </>
}

export default SaveRoutine