import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createRoutine, resetNewRoutine } from "../features/routines/routineSlice"
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

    const onSubmit = e => {
        e.preventDefault()

        const routineData = {
            title,
            description,
            creater,
            exercises,
            duration
        }

        dispatch(createRoutine(routineData))

        // Save routine to user's savedWorkouts array


        // Clear newRoutine array
        dispatch(resetNewRoutine())

        navigate('/routines')
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
                        <ul>
                            {newRoutine.map((exercise) => (
                                <li key={exercise.id}>{exercise.title}</li>
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