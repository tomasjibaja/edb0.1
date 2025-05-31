import { useState, useEffect } from 'react';
import Router from './router/Router'
import './App.css'

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      <div className="main">
        <Router />
      </div>
    </>
  )
}

export default App
