import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import CreateExercise from './pages/CreateExercise';
import Exercises from './pages/Exercises';
import Routines from './pages/Routines';
import Exercise from './pages/ExerciseDetails';
import Routine from './pages/RoutineDetails';

// Will need to import pages and build routes for CRUD operations for Catagories, Routines and Exercises

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/createExercise' element={<CreateExercise />} />
            <Route path='/exercises' element={<Exercises />} />
            <Route path='/routines' element={<Routines />} />
            <Route path='/exercise/:id' element={<Exercise />} />
            <Route path='/routine/:id' element={<Routine />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
   ); 
}

export default App;
