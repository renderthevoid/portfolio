import React from 'react'
import Header from './components/Header'
import './scss/app.scss'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'

const App = () => {
  return (
    <BrowserRouter>
      <div className="content">
        <Header />
        <AppRouter />
      </div>
    </BrowserRouter>
  )
}
export default App
