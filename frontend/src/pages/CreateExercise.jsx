import { useSelector } from "react-redux"
import ExerciseForm from "../components/ExerciseForm"

function CreateExercise() {

    const {user} = useSelector((state) => state.auth)
    
    return <>
        <section className="heading">
            <h1>Welcome {user && user.name}</h1>
            <p>Create a New Exercise</p>
        </section>

        <ExerciseForm />
    </>
}

export default CreateExercise