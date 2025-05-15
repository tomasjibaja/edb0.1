import Router from './router/Router'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <div className="main">
        <Sidebar />
        <Router />
      </div>
    </>
  )
}

export default App
