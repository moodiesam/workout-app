import { Link } from 'react-router-dom'

function ExerciseItem({ exercise }) {
    // Check if user is admin. and if so, add edit/delete buttons to exercises

    return (
        <Link to={`/exercise/${exercise._id}`}>
            <div className="exercise">
                <h2>{exercise.title}</h2>
                {exercise.exerciseType ? (
                    <h4>Exercise Type: {exercise.exerciseType.title}</h4>
                ) : (<></>)}
                <h4>Area of Focus: {exercise.focusArea}</h4>
            </div>
        </Link>
    )
}

export default ExerciseItem