import { Link } from "react-router-dom"

function WorkoutItem({ workout }) {
    //add button to delete workout from saveWorkouts array

    return (
        <Link to={`/routine/${workout._id}`}>
            <div className="routine">
                <h3>{workout.title}</h3>
            </div>
        </Link>
    )
}

export default WorkoutItem