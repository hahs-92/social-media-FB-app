import  {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

//page
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import Register from '../pages/Register'


function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='login' element={ <Login /> } />
          <Route path='register' element={ <Register /> } />
          <Route path='profile'>
            <Route path=':username' element={ <Profile profile /> }/>
          </Route>
      </Routes>
    </Router>
  );
}

export default App
