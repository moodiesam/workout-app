import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createExercise } from "../features/exercises/exerciseSlice"
import { getExerciseTypes, resetExerciseTypes } from "../features/exerciseTypes/exerciseTypeSlice"
import ExerciseTypeOption from "./ExerciseTypeOption"
import Spinner from "./Spinner"
import { useNavigate } from "react-router-dom"

function ExerciseForm() {
    // Set form state similar to how register did it
    const [exerciseFormData, setExerciseFormData] = useState({
        title: '',
        exerciseType: '',
        description: '',
        focusArea: '',
        instructions: '',
        tips: ''
    })

    const {title, exerciseType, description, focusArea, instructions, tips} = exerciseFormData
    const { exerciseTypes, isLoading, isError, message } = useSelector((state) => state.exerciseTypes)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getExerciseTypes())

        if(isError) {
            console.log(message)
        }

        return () => {
            dispatch(resetExerciseTypes())
        }
    }, [dispatch]) // isError and message HIT A LOOP WHEN I LOGOUT

    const onChange = (e) => {
        setExerciseFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = e => {
        e.preventDefault()

        if (!title || !exerciseType || !description || !focusArea || !instructions || !tips) {
            alert("Please fill out all areas")
        } else {
            const exerciseData = {
                title, 
                exerciseType, 
                description, 
                focusArea, 
                instructions, 
                tips
            }

            dispatch(createExercise(exerciseData))

            setExerciseFormData({
                title: '',
                exerciseType: '',
                description: '',
                focusArea: '',
                instructions: '',
                tips: ''
            })

            navigate('/exercises')
        }
    }

    if(isLoading) {
        return <Spinner />
    }

    return <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="title">Exercise Title</label>
                <input type="text" className="form-controll" id="title" name="title" value={title} onChange={onChange} />
            </div>
            <div className="form-group">           
                {exerciseTypes.length > 0 ? (
                    <label htmlFor="exerciseType">Exercise Type
                        <select id="exerciseType" name="exerciseType" onChange={onChange}>
                            <option value=''>-- Select Exercise Type --</option>
                            {exerciseTypes.map((exerciseType) => (             
                                <ExerciseTypeOption key={exerciseType._id} exerciseType={exerciseType} />
                            ))}
                        </select>
                        </label>  
                ) : (<div>Needs exercise types</div>)
                }
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
