import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import SaveRoutine from "../components/SaveRoutine";
import { getRoutine, resetRoutines } from "../features/routines/routineSlice";

function Routine() {
    const { id } = useParams()
    const dispatch = useDispatch()

    const { routines, isLoading, isError, message } = useSelector((state) => state.routines)

    useEffect(() => {
        if(isError) {
            console.log(message)
        }

        dispatch(getRoutine(id))

        return () => {
            dispatch(resetRoutines())
        }
    }, [dispatch])

    if(isLoading) {
        return <Spinner />
    }

    return <>
        <section className="content">
            <div className="routineDetails">
            <h1>{routines.title}</h1>
            <h3>{routines.description}</h3>
            {routines.exercises ? (<>
                    <ol className="exerciseList">
                        {routines.exercises.map((exercise) => (       
                                <li className="exerciseListItem" key={exercise._id}>
                                    <Link to={`/exercise/${exercise._id}`}>
                                        {exercise.title}
                                    </Link>
                                </li> 
                        ))}
                    </ol>
                    <SaveRoutine routineId={routines._id} />
                </>
            ) : (<h3>Routine has been removed</h3>)}
            </div>
        </section>
    </>
}

export default Routine