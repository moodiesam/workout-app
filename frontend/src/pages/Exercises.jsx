import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { getExercises, reset } from "../features/exercises/exerciseSlice";
import { resetExerciseTypes } from "../features/exerciseTypes/exerciseTypeSlice";
import Spinner from "../components/Spinner";
import ExerciseItem from "../components/ExerciseItem";
import ExerciseTypeLinks from "../components/ExerciseTypeLinks";
import { getExerciseTypes } from "../features/exerciseTypes/exerciseTypeSlice";


function Exercises() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { exercises, isLoading, isError, message } = useSelector((state) => state.exercises)
    const { user } = useSelector((state) => state.auth)  
    const { newRoutine } = useSelector((state) => state.routines)
    const { exerciseTypes } = useSelector((state) => state.exerciseTypes)
    


    useEffect(() => {
        if(!user) {
            navigate('/login')
        }

        if(isError) {
            console.log(message)
        }

        dispatch(getExerciseTypes())

        dispatch(getExercises())

        return () => {
            dispatch(reset())
            dispatch(resetExerciseTypes())
        }
    }, [dispatch, navigate])

    if(isLoading) {
        return <Spinner />
    }

    return <>
        <section className="content">
            <h1>Exercises</h1>
            {exerciseTypes.length ? (
                <div className="exerciseTypeLinks">
                    {exerciseTypes.map((exerciseType) => (
                        <ExerciseTypeLinks key={exerciseType._id} exerciseType={exerciseType}/>
                    ))}
                </div>
                ) : (<Spinner />)} 
            {exercises.length > 0 ? (
                <div className="exercises">
                    {exercises.map((exercise) => (
                        <ExerciseItem key={exercise._id} exercise={exercise} newRoutine={newRoutine} />
                    ))}
                </div>
            ) : (<h3>There are no exercises</h3>)}
        </section>
    </>
}

export default Exercises