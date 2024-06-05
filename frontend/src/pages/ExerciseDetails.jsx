import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { getExercise, reset } from "../features/exercises/exerciseSlice";
import AddToRoutine from "../components/AddToRoutine";

function Exercise() {
    const { id } = useParams()
    const dispatch = useDispatch()

    const { exercises, isLoading, isError, message } = useSelector((state) => state.exercises)
    const { newRoutine } = useSelector((state) => state.routines)

    useEffect(() => {
        if(isError) {
            console.log(message)
        }

        dispatch(getExercise(id))

        return () => {
            dispatch(reset())
        }
    }, [dispatch])

    if(isLoading) {
        return <Spinner />
    }

    return <>
        <section className="exerciseContent">
            <h1>{exercises.title}</h1>
            <h3>Area of Focus: {exercises.focusArea}</h3>
            <p><b>Instructions</b>: {exercises.instructions}</p>
            <p><b>Tips</b>: {exercises.tips}</p>
            <AddToRoutine exerciseId={id} exerciseTitle={exercises.title} newRoutine={newRoutine} />
        </section>
    </>
}

export default Exercise