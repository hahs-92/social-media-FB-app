import { useContext } from 'react'
import  {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
//page
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import Register from '../pages/Register'
//context
import { AuthContext } from '../context/AuthContext'



function PrivateRoutes({children}) {
  const { user } = useContext(AuthContext)

  return user ? children : <Navigate to="/register" />
}


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <PrivateRoutes><Home /></PrivateRoutes> } />

        <Route path='login' element={ <Login />} />

        <Route path='register' element={ <Register />} />

        <Route path='profile'>
          <Route path=':username' element={ <Profile profile /> }/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App
