function ExerciseItem({ exercise }) {
    return (
        <div className="exercise">
            <h2>{exercise.title}</h2>
            <h4>Exercise Type: {exercise.exerciseType.title}</h4>
            <h4>Area of Focus: {exercise.focusArea}</h4>
        </div>
    )
}

export default ExerciseItem