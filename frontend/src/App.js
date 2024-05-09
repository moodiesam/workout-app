import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import CreateExercise from './pages/CreateExercise';
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
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
   ); 
}

export default App;
