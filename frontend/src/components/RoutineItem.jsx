function RoutineItem({ routine }) {
    // Check if user is admin. and if so, add edit/delete buttons to exercises

    return (
        <div className="routine">
            <h2>{routine.title}</h2>
            <p>{routine.description}</p>
            <p>Duration: {routine.duration}</p>
        </div>
    )
}

export default RoutineItem