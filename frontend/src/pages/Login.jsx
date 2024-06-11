import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }

    const guestLogin = () => {
        const guestData = {
            email: 'guest@gmail.com',
            password: 'Guest12345'
        }

        dispatch(login(guestData))
    }

    if(isLoading) {
        return <Spinner />
    }

    return <>
        <section className="heading">
            <h1>
                <FaSignInAlt /> Login
            </h1>
            <p>Login and work on your fitness plans</p>
        </section>

        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="email" className="form-controll" id='email' name='email' value={email} placeholder='Enter your email' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-controll" id='password' name='password' value={password} placeholder='Enter password' onChange={onChange} />
                </div>
                <div className="form-group">
                    <button type='submit' className='btn btn-block'>Submit</button>
                </div>
            </form>
            <button type='button' onClick={guestLogin} className="btn-action">Browse as Guest</button>
        </section>
    </>
}

export default Login