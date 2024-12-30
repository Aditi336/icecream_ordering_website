import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './store/Auth.jsx'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <Orders>
  <AuthProvider>
  <React.StrictMode>
  <ToastContainer/>
    <App />
    </React.StrictMode>

  </AuthProvider>
  // </Orders>
)
