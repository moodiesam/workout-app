import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { getRoutines, resetRoutines } from "../features/routines/routineSlice";

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

    return (
        <div>Routines</div>
    )
}

export default Routines