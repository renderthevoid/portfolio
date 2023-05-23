import React from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import style from './togglemenu.module.scss'

const ToggleMenu = ({ onChange, isOpen }) => {
  return (
    <div className={style.togglemenu} onClick={onChange}>
      {isOpen ? <XMarkIcon /> : <Bars3Icon />}
    </div>
  )
}

export default ToggleMenu
