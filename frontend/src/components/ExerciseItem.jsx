function ExerciseItem({ exercise }) {
    return (
        <div className="exercise">
            <h2>{exercise.title}</h2>
            <h4>Area of Focus: {exercise.focusArea}</h4>
            <p>Instructions: {exercise.instructions}</p>
            <p>Tips: {exercise.tips}</p>
        </div>
    )
}

export default ExerciseItem