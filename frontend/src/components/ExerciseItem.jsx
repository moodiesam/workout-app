function ExerciseItem({ exercise }) {
    // Check if user is admin. and if so, add edit/delete buttons to exercises

    return (
        <div className="exercise">
            <h2>{exercise.title}</h2>
            <h4>Exercise Type: {exercise.exerciseType.title}</h4>
            <h4>Area of Focus: {exercise.focusArea}</h4>
        </div>
    )
}

export default ExerciseItem