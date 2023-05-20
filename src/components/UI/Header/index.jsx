import React from 'react'
import style from './header.module.scss'
import { menuList } from './menuList'
import { Link, Navigate } from 'react-router-dom'

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <ul className={style.items}>
          {menuList.map((item) => (
            <li id={item.id} className={`${style.item} ${style.home}`}>
              <Link to={item.src}>
                {item.component}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={style.items}>
          <li className={style.item}>
            <div className={style.about}>
              <div>Status: Developer</div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
