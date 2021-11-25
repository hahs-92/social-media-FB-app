import React from 'react'
import ReactDOM from 'react-dom'
//routes
import App from './routes/App'
//styles
import './styles/Globals.css'
//context
import { AuthContextProvider } from './context/AuthContext'


ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
