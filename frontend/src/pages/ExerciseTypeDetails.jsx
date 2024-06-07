import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getExerciseType, resetExerciseTypes } from "../features/exerciseTypes/exerciseTypeSlice"
import Spinner from "../components/Spinner"
import ExerciseItem from "../components/ExerciseItem"
import { getExercisesByType, reset } from "../features/exercises/exerciseSlice"

function ExerciseType() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { exercises, isLoading, isError, message } = useSelector((state) => state.exercises)
    const { newRoutine } = useSelector((state) => state.routines)

    useEffect(() => {
        if(isError) {
            console.log(message)
        }
        
        dispatch(getExercisesByType(id))

        return () => {
            dispatch(reset())
        }
    }, [dispatch])

    if(isLoading) {
        return <Spinner />
    }

    return <section className="content">
        {exercises.length ? (<>
                <h1>Exercise Type: {exercises[0].exerciseType.title}</h1>
                {/* Find way to keep Exercise Type NavBar */}
                <div className="exercises">
                    {exercises.map((exercise) => (
                        <ExerciseItem key={exercise._id} exercise={exercise} newRoutine={newRoutine} />
                    ))}
                </div>
            </>
            ) : (<div>No types</div>)}
        
    </section>
}

export default ExerciseType