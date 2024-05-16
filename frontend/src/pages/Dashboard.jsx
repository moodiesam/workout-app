import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import Spinner from "../components/Spinner"
import WorkoutItem from "../components/WorkoutItem"

function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, message} = useSelector((state) => state.auth)    

    useEffect(() => {
        if(!user) {
            navigate('/login')
        }

        if(isError) {
            console.log(message);
        }
        
    }, [user, navigate, dispatch]) // isError and message HIT A LOOP WHEN I LOGOUT

    if(isLoading) {
        return <Spinner />
    }

    if(user) {
        return <>
            <section className="heading">
                <h1>Welcome {user && user.name}</h1>
            </section>
            
            <section className="content">
                <h1>Your Routines</h1>
                {user.savedWorkouts.length > 0 ? (
                    <div className="routines">
                        {user.savedWorkouts.map((workout) => (
                            <WorkoutItem key={workout._id} workout={workout} />
                        ))}
                    </div>
                ) : (<h3>You have no saved routines.</h3>)}
            </section>
        </>
    }
}

export default Dashboard