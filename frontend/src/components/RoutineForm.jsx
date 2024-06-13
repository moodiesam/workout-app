import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createRoutine, resetNewRoutine, removeFromNewRoutine, rearrangeNewRoutine } from "../features/routines/routineSlice"
// Will need a component to display each exercise in routine
import Spinner from "./Spinner"
import { useNavigate } from "react-router-dom"

function RoutineForm() {
    // Will need title, description, array of exercises, duration
    const { newRoutine, isLoading, isError, message } = useSelector((state) => state.routines)
    const {user} = useSelector((state) => state.auth)

    const exerciseIds = newRoutine.map((exercise) => exercise.id)

    const [routineFormData, setRoutineFormData] = useState({
        title: '',
        description: '',
        creater: user._id,
        exercises: exerciseIds,
        duration: ''
    })

    const {title, description, creater, exercises, duration} = routineFormData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // let exerciseData equal an empty array
    // forEach exercise in newRoutine, fetch the details and push it to exercise Data
    // use exerciseData to populate returned list

    useEffect(() => {
        if(isError) {
            console.log(message)
        }
    }, [dispatch])

    const onChange = (e) => {
        setRoutineFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onRemove = (e) => {
        e.preventDefault()

        dispatch(removeFromNewRoutine(e.target.parentElement.id))
    }

    const onSubmit = e => {
        e.preventDefault()

        if (!title || !description) {
            alert("Please include a title and description")
        } else {
            const routineData = {
                title,
                description,
                creater,
                exercises,
                duration
            }

            dispatch(createRoutine(routineData))

            // TODO Save routine to user's savedWorkouts array

            dispatch(resetNewRoutine())

            navigate('/routines')
        }
    }
    
    // Drag and drop to change the order of the exercises
    let draggedExercise
    let dropSpot
    let exerciseOrder = newRoutine.map((exercise) => exercise);
    
    const dragStart = (e) => {
        draggedExercise = e.target
        draggedExercise.style.opacity = .5
    }

    const handleDragEnter = (e) => {
        if(e.target.id) {
            dropSpot = e.target.id
            let currentDropSpot = document.getElementById(dropSpot)
            currentDropSpot.className = 'currentDropSpot newRoutineItem'
        } 
    }

    const handleDragLeave = (e) => {
        
            let oldDropSpot = document.getElementById(e.target.id)
            oldDropSpot.className = 'newRoutineItem'
        
    }

    const handleDrop = () => {

        if(draggedExercise.id === dropSpot) {
            draggedExercise.style.opacity = 1
            return
        }

        const draggedExerciseIndex = exerciseOrder.findIndex(object => {
            return object.id === draggedExercise.id
        })
        let movedObject = exerciseOrder[draggedExerciseIndex]

        exerciseOrder.splice(draggedExerciseIndex, 1)

        const dropSpotIndex = exerciseOrder.findIndex(object => {
            return object.id === dropSpot
        })

        // ! Places moved item UNDER dropSpot... Need to also be able to insert it above
        exerciseOrder.splice(dropSpotIndex + 1, 0, movedObject)

        handleNewOrder(exerciseOrder)
    }

    const handleNewOrder = (exerciseOrder) => {
        // set state to exerciseOrder
        dispatch(rearrangeNewRoutine(exerciseOrder))
    }

    if(isLoading) {
        return <Spinner />
    }

    return <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="title">Routine Title</label>
                <input type="text" className="form-control" id="title" name="title" value={title} onChange={onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-controll" id="description" name="description" value={description} onChange={onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="duration">Estimated Duration of Set in Minutes</label>
                <input type="number" min={1} className="form-controll" id="duration" name="duration" value={duration} onChange={onChange} />
            </div>
            <div className="form-group">    
                    {newRoutine && newRoutine.length > 0 ? (
                        <ul id="exerciseList">
                            {newRoutine.map((exercise) => (
                                <li className="newRoutineItem" id={exercise.id} draggable='true' onDragStart={dragStart} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDragEnd={handleDrop} key={exercise.id}>
                                    <div className="noPointerEvents">#</div>
                                    <div className="noPointerEvents" >{exercise.title}</div>
                                    <button className="btn-action noPointerEvents" onClick={onRemove} >Remove</button>
                                </li>
                            ))}
                        </ul>
                    ) : (<div>Select Exercises to add to Routine</div>)}
            </div>
            <div className="form-group">
                <button className="btn btn-block" type="submit">
                    Create Routine
                </button>
            </div>
        </form>
    </section>
}

export default RoutineForm