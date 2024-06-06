import { Link } from "react-router-dom";

function ExerciseTypeLinks({ exerciseType }) {
    return <>
        <Link to={`/exercisetype/${exerciseType._id}`}>
            {exerciseType.title}
        </Link>
    </>
}

export default ExerciseTypeLinks