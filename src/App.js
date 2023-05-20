import React, { useState } from 'react'
import Header from './components/UI/Header'
import './scss/app.scss'
import IntroPage from './components/IntroPage'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="content">
      <Header />
      <IntroPage />
    </div>
  )
}
export default App
