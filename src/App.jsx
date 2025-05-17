import { useState, useEffect } from 'react';
import Router from './router/Router'
import Sidebar from './components/Sidebar'
import Loading from './components/Loading'
import './App.css'

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      <div className="main">
        {isLoading && <Loading />}
        <Sidebar />
        <Router />
      </div>
    </>
  )
}

export default App
