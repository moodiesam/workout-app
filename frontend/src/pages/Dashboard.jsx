import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import ExerciseForm from "../components/ExerciseForm"
import ExerciseItem from "../components/ExerciseItem"
import Spinner from "../components/Spinner"
import { getExercises, reset } from "../features/exercises/exerciseSlice"

function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const { exercises, isLoading, isError, message } = useSelector((state) => state.exercises)

    useEffect(() => {
        if(!user) {
            navigate('/login')
        }

        if(isError) {
            console.log(message);
        }

        dispatch(getExercises())

        return () => {
            dispatch(reset())
        }
    }, [user, navigate, dispatch, isError, message]) 

    if(isLoading) {
        return <Spinner />
    }

    return <>
        <section className="heading">
            <h1>Welcome {user && user.name}</h1>
            <p>Create a New Exercise</p>
        </section>

        <ExerciseForm />

        <section className="content">
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

export default Dashboard