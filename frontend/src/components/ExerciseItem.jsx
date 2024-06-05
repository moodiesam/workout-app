import { Link } from 'react-router-dom'
import AddToRoutine from './AddToRoutine'

function ExerciseItem({ exercise, newRoutine }) {
    // Check if user is admin. and if so, add edit/delete buttons to exercises

    return (
        
        <div className="exercise">
            <Link to={`/exercise/${exercise._id}`}>
                <h2>{exercise.title}</h2>
            </Link>
            {exercise.exerciseType ? (
                <h4>Exercise Type: {exercise.exerciseType.title}</h4>
            ) : (<></>)}
            <h4>Area of Focus: {exercise.focusArea}</h4>
            <AddToRoutine exerciseId={exercise._id} exerciseTitle={exercise.title} newRoutine={newRoutine} />
        </div>
        
    )
}

export default ExerciseItem