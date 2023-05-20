import React from 'react'
import style from './header.module.scss'

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <ul className={style.items}>
          <li className={style.item}>
            <a href="#">
              <svg
                height="19px"
                version="1.1"
                viewBox="0 0 20 19"
                width="20px"
                className={style.home}
              >
                <title />
                <desc />
                <defs />
                <g
                  fill="none"
                  fill-rule="evenodd"
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                >
                  <g
                    fill="#000000"
                    id="Core"
                    transform="translate(-506.000000, -255.000000)"
                  >
                    <g id="home" transform="translate(506.000000, 255.500000)">
                      <path
                        d="M8,17 L8,11 L12,11 L12,17 L17,17 L17,9 L20,9 L10,0 L0,9 L3,9 L3,17 L8,17 Z"
                        id="Shape"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </li>
          <li className={style.item}>
            <a href="#">
              <svg
                enable-background="new 0 0 32 32"
                height="32px"
                id="svg2"
                version="1.1"
                viewBox="0 0 32 32"
                width="32px"
              >
                <g id="background">
                  <rect fill="none" height="32" width="32" />
                </g>
                <g id="news_1_">
                  <path d="M4,14h20v-2H4V14z M15,26h7v-2h-7V26z M15,22h9v-2h-9V22z M15,18h9v-2h-9V18z M4,26h9V16H4V26z M28,10V6H0v22c0,0,0,4,4,4   h25c0,0,3-0.062,3-4V10H28z M4,30c-2,0-2-2-2-2V8h24v20c0,0.921,0.284,1.558,0.676,2H4z" />
                </g>
              </svg>
            </a>
          </li>
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
