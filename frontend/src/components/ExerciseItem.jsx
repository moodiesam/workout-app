import { Link } from 'react-router-dom'
import AddToRoutine from './AddToRoutine'

function ExerciseItem({ exercise, newRoutine }) {
    // Check if user is admin. and if so, add edit/delete buttons to exercises

    return (
        <Link to={`/exercise/${exercise._id}`}>
            <div className="exercise">
                <h2>{exercise.title}</h2>
                {exercise.exerciseType ? (
                    <h4>Exercise Type: {exercise.exerciseType.title}</h4>
                ) : (<></>)}
                <h4>Area of Focus: {exercise.focusArea}</h4>
                <AddToRoutine exerciseId={exercise._id} exerciseTitle={exercise.title} newRoutine={newRoutine} />
            </div>
        </Link>
    )
}

export default ExerciseItem