import React, { useEffect, useRef, useState } from 'react'
import style from './header.module.scss'
import Navigation from './Navigation'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.composedPath().includes(ref.current)) {
        setIsOpen(false)
      }
    }
    document.body.addEventListener('click', handleClickOutside)

    return () => document.body.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <header className={style.header} ref={ref}>
      <Navigation isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
    </header>
  )
}

export default Header
