import { useDispatch } from "react-redux"
import { addToNewRoutine } from "../features/routines/routineSlice"


function AddToRoutine({ exerciseId }) {
    const dispatch = useDispatch()

    const onClick = (e) => {
        e.preventDefault()

        dispatch(addToNewRoutine(exerciseId))
    }

    return<>
    <button className="btn-action" onClick={onClick}>
        Add to Routine
    </button>
    </>
}

export default AddToRoutine