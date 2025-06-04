import { ToastContainer } from 'react-toastify';
import Router from './router/Router'
import './App.css'


function App() {

  return (
    <>
      <ToastContainer />
      <div className="main">
        <Router />
      </div>
    </>
  )
}

export default App
