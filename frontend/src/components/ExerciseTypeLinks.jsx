import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getExerciseTypes, resetExerciseTypes } from "../features/exerciseTypes/exerciseTypeSlice";

function ExerciseTypeLinks() {
    const dispatch = useDispatch()
    const { exerciseTypes } = useSelector((state) => state.exerciseTypes)

    useEffect(() => {
        dispatch(getExerciseTypes())

        return () => {
            dispatch(resetExerciseTypes())
        }
    }, [dispatch])

    return <>
        
            {exerciseTypes.length ? (
                <div className="exerciseTypeLinks">
                    {exerciseTypes.map((exerciseType) => (
                        <Link to={`/exercisetype/${exerciseType._id}`}>
                            {exerciseType.title}
                        </Link>
                    ))}
                </div>
            ) : (<div>No Exercise Types</div>)}
        
    </>
}

export default ExerciseTypeLinks