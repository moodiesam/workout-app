import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { getRoutines, resetRoutines } from "../features/routines/routineSlice";
import RoutineItem from "../components/RoutineItem";

function Routines() {
    const { routines, isLoading, isError, message } = useSelector((state) => state.routines)
    const dispatch = useDispatch()

    useEffect(() => {
        if(isError) {
            console.log(message)
        }

        dispatch(getRoutines())

        return () => {
            dispatch(resetRoutines())
        }
    }, [dispatch])

    if(isLoading) {
        return <Spinner />
    }

    return <>
        <section className="content">
            <h1>Routines</h1>
            {routines.length > 0 ? (
                <div className="routines">
                    {routines.map((routine) => (
                        <RoutineItem key={routine._id} routine={routine} />
                    ))}
                </div>
            ) : (<h3>There are no routines</h3>)}
        </section>
    </>
}

export default Routines