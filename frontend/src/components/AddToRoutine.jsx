import { useDispatch } from "react-redux"
import { addToNewRoutine } from "../features/routines/routineSlice"
import { useEffect } from "react"


function AddToRoutine({ exerciseId, exerciseTitle, newRoutine }) {
    const dispatch = useDispatch()
    const exerciseData = {
        title: exerciseTitle,
        id: exerciseId
    }

    const alreadySaved = newRoutine.filter((exercise) => exercise.id === exerciseId)

    useEffect(() => {
        if(alreadySaved[0]) {
            let alreadyAdded = document.getElementById(exerciseId)
            alreadyAdded.classList.add("added")
            alreadyAdded.innerHTML = "Added to new Routine"
        }
    }, [alreadySaved, exerciseId])
    

    const onClick = (e) => {
        e.preventDefault() 

        if(alreadySaved[0]) {
            console.log("Exercise is already in the routine")
        } else {
            let added = document.getElementById(exerciseId)
            added.classList.add("added")
            dispatch(addToNewRoutine(exerciseData))
        }

    }

    return<>
    <button className="btn-action" id={exerciseId} onClick={onClick}>
        Add to Routine
    </button>
    </>
}

export default AddToRoutine