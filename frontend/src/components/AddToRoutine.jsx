import { useDispatch, useSelector } from "react-redux"
import { addToNewRoutine } from "../features/routines/routineSlice"


function AddToRoutine({ exerciseId, exerciseTitle, newRoutine }) {
    const dispatch = useDispatch()
    const exerciseData = {
        title: exerciseTitle,
        id: exerciseId
    }

    const onClick = (e) => {
        e.preventDefault()

        const alreadySaved = newRoutine.filter((exercise) => exercise.id === exerciseId)

        if(alreadySaved[0]) {
            console.log("Exercise is already in the routine")
        } else {
            dispatch(addToNewRoutine(exerciseData))
        }

    }

    return<>
    <button className="btn-action" onClick={onClick}>
        Add to Routine
    </button>
    </>
}

export default AddToRoutine