import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { getExercises, reset } from "../features/exercises/exerciseSlice";
import Spinner from "../components/Spinner";
import ExerciseItem from "../components/ExerciseItem";
import ExerciseTypeLinks from "../components/ExerciseTypeLinks";


function Exercises() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { exercises, isLoading, isError, message } = useSelector((state) => state.exercises)
    const { user } = useSelector((state) => state.auth)  
    const { newRoutine } = useSelector((state) => state.routines)    

    useEffect(() => {
        if(!user) {
            navigate('/login')
        }

        if(isError) {
            console.log(message)
        }

        dispatch(getExercises())

        return () => {
            dispatch(reset())
        }
    }, [dispatch, navigate])

    if(isLoading) {
        return <Spinner />
    }

    return <>
        <section className="content">
            <h1>Exercises</h1>
            <ExerciseTypeLinks /> 
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