import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)


    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>Dashboard</Link>
            </div>
            <ul>
                <li>
                    <Link to='/exercises'>Exercises</Link>
                </li>
                <li>
                    <Link to='/routines'>Routines</Link>
                </li>
            </ul>
            <ul>
                {user ? (<>
                        <li>
                            <Link to='/createExercise'>New Exercise</Link>
                        </li>
                        <li>
                            <Link to='/createRoutine'>Create Routine</Link>
                        </li>
                        <li>
                            <button className='btn' onClick={onLogout}>
                                <FaSignOutAlt /> Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/login'>
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                <FaUser /> Register
                            </Link>
                        </li>
                    </>
                ) }
                
            </ul>
        </header>
    )
}

export default Header