import { useDispatch, useSelector } from "react-redux"
import { addToNewRoutine } from "../features/routines/routineSlice"


function AddToRoutine({ exerciseId, newRoutine }) {
    const dispatch = useDispatch()

    const onClick = (e) => {
        e.preventDefault()

        const alreadySaved = newRoutine.filter((exercise) => exercise === exerciseId)

        if(alreadySaved[0]) {
            console.log("Exercise is already in the routine")
        } else {
            dispatch(addToNewRoutine(exerciseId))
        }

    }

    return<>
    <button className="btn-action" onClick={onClick}>
        Add to Routine
    </button>
    </>
}

export default AddToRoutine