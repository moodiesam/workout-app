import { useState } from "react"
import { useDispatch } from "react-redux"
import {createExercise} from "../features/exercises/exerciseSlice"

function ExerciseForm() {
    // Set form state similar to how register did it
    const [exerciseFormData, setExerciseFormData] = useState({
        title: '',
        exerciseType: '', // Needs to be a dropdown list existing types
        description: '',
        focusArea: '',
        instructions: '',
        tips: ''
    })

    const {title, exerciseType, description, focusArea, instructions, tips} = exerciseFormData

    const dispatch = useDispatch()

    //function for onChange

    const onChange = (e) => {
        setExerciseFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = e => {
        e.preventDefault()

        dispatch(createExercise({exerciseFormData}))
        setExerciseFormData({
            title: '',
            exerciseType: '', // Needs to be a dropdown list existing types
            description: '',
            focusArea: '',
            instructions: '',
            tips: ''
        })
    }

    return <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="title">Exercise Title</label>
                <input type="text" className="form-controll" id="title" name="title" value={title} onChange={onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="exerciseType">Exercise Type</label>
                <input type="text" className="form-controll" id="exerciseType" name="exerciseType" value={exerciseType} onChange={onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-controll" id="description" name="description" value={description} onChange={onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="forusArea">Area of Focus</label>
                <input type="text" className="form-controll" id="focusArea" name="focusArea" value={focusArea} onChange={onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="instructions">Instructions</label>
                <input type="textArea" className="form-controll" id="instructions" name="instructions" value={instructions} onChange={onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="tips">Tips</label>
                <input type="text" className="form-controll" id="tips" name="tips" value={tips} onChange={onChange} />
            </div>
            <div className="form-group">
                <button className="btn btn-block" type="submit">
                    Add Exercise
                </button>
            </div>
        </form>
    </section>
}

export default ExerciseForm