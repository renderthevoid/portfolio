import React, { useEffect, useRef, useState } from 'react'
import style from './navigation.module.scss'
import { menuList } from '../menuList'
import { Link } from 'react-router-dom'
import ToggleMenu from '../ToggleMenu'

const Navigation = ({ isOpen, setIsOpen }) => {
  return (
    <nav className={style.navbar}>
      <ToggleMenu onChange={setIsOpen} isOpen={isOpen} />
      <div className={`${style.box} ${isOpen ? style.active : ''}`}>
        <ul className={style.items}>
          {menuList.map((item) => (
            <li key={item.id} className={`${style.item} ${style.home}`}>
              <Link to={item.src}>
                <div>
                  {item.component}
                  <span className={style.title}>{item.title}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <ul className={style.items}>
        <li className={style.item}>
          <div className={style.about}>
            <div></div>
          </div>
        </li>
      </ul> */}
    </nav>
  )
}

export default Navigation
