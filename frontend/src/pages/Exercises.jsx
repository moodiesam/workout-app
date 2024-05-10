import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExercises, reset } from "../features/exercises/exerciseSlice";
import Spinner from "../components/Spinner";
import ExerciseItem from "../components/ExerciseItem";

function Exercises() {
    const { exercises, isLoading, isError, message } = useSelector((state) => state.exercises)
    const dispatch = useDispatch()

    useEffect(() => {
        if(isError) {
            console.log(message)
        }

        dispatch(getExercises())

        return () => {
            dispatch(reset())
        }
    }, [dispatch])

    if(isLoading) {
        return <Spinner />
    }

    return <>
        <section className="content">
            <h1>Exercises</h1>
            {exercises.exercises ? (
                <div className="exercises">
                    {exercises.exercises.map((exercise) => (
                        <ExerciseItem key={exercise._id} exercise={exercise} />
                    ))}
                </div>
            ) : (<h3>There are no exercises</h3>)}
        </section>
    </>
}

export default Exercises