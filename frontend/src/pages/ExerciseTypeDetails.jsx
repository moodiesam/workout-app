import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getExerciseType, resetExerciseTypes } from "../features/exerciseTypes/exerciseTypeSlice"
import Spinner from "../components/Spinner"
import ExerciseItem from "../components/ExerciseItem"

function ExerciseType() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { exerciseTypes, isLoading, isError, message } = useSelector((state) => state.exerciseTypes)
    const { newRoutine } = useSelector((state) => state.routines)

    console.log(exerciseTypes.exerciseType)

    useEffect(() => {
        if(isError) {
            console.log(message)
        }

        dispatch(getExerciseType(id))

        return () => {
            dispatch(resetExerciseTypes())
        }
    }, [dispatch])

    if(isLoading) {
        return <Spinner />
    }

    return <section className="content">
        {exerciseTypes.exerciseType ? (<>
                <h1>Exercise Type: {exerciseTypes.exerciseType.title}</h1>
                <div className="exercises">
                    {exerciseTypes.allExercises.map((exercise) => (
                        <ExerciseItem key={exercise._id} exercise={exercise} newRoutine={newRoutine} />
                    ))}
                </div>
            </>
            ) : (<div>No types</div>)}
        
    </section>
}

export default ExerciseType