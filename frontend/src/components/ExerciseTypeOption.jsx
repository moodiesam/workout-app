function ExerciseTypeOption({ exerciseType }) {
    return(<> 
                <option value={exerciseType._id}>{exerciseType.title}</option> 
        </>
    )
}

export default ExerciseTypeOption