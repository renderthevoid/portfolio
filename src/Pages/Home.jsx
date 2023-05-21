import React from 'react'
import Button from '../components/UI/Button'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
  const listVariants = {
    leftHidden: {
      x: -1000,
      opacity: 0,
    },
    rightHidden: {
      x: 1000,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  }

  return (
    <section className="intro">
      <div className="intro__wrapper">
        <div className="intro__background">
          <svg viewBox="0 0 2 1" preserveAspectRatio="none">
            <defs>
              <path
                id="w"
                d="
      m0 1v-.5 
      q.5.5 1 0
      t1 0 1 0 1 0
      v.5z"
              />
            </defs>
            <g>
              <use href="#w" y=".0" fill="#2d55aa" />
              <use href="#w" y=".1" fill="#3461c1" />
              <use href="#w" y=".2" fill="#4579e2" />
            </g>
          </svg>
        </div>
        <motion.div
          className="intro__text"
          initial={'leftHidden'}
          animate={'visible'}
          transition={{
            delay: 0.5,
          }}
          variants={listVariants}
        >
          <p>Greetings</p>
          <h1>Vladislav Gorbunov</h1>
          <p>Frontend Developer</p>
          <Link to="/About">
            <Button value="VIEW MORE" />
          </Link>
        </motion.div>
        <motion.div
          className="socials"
          initial={'rightHidden'}
          animate={'visible'}
          transition={{
            delay: 0.5,
          }}
          variants={listVariants}
        >
          <h3>Socials / CV</h3>
          <div className="socials__icons">
            <a
              href="https://t.me/renderthevoidl"
              target="_blank"
              className="socials__icon-telegram icon"
            >
              <svg
                data-name="Layer 1"
                id="Layer_1"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <path d="M256,0C114.615,0,0,114.615,0,256S114.615,512,256,512,512,397.385,512,256,397.385,0,256,0ZM389.059,161.936,343.591,379a16.007,16.007,0,0,1-25.177,9.593l-66.136-48.861-40.068,37.8a5.429,5.429,0,0,1-7.74-.294l-.861-.946,6.962-67.375L336.055,194.266a3.358,3.358,0,0,0-4.061-5.317L171.515,290.519,102.4,267.307a9.393,9.393,0,0,1-.32-17.694L372.5,147.744A12.441,12.441,0,0,1,389.059,161.936Z" />
              </svg>
            </a>
            <a
              href="https://github.com/renderthevoid"
              target="_blank"
              className="socials__icon-github icon"
            >
              <svg
                enableBackground="new 0 0 32 32"
                height="32px"
                id="Layer_1"
                version="1.0"
                viewBox="0 0 32 32"
                width="32px"
              >
                <path
                  clipRule="evenodd"
                  d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z"
                  fill="#181616"
                  fillRule="evenodd"
                />
              </svg>
            </a>
            <div className="icon">
              <svg
                height="8.4666mm"
                version="1.1"
                viewBox="0 0 846.66 846.66"
                width="8.4666mm"
              >
                <g id="Layer_x0020_1">
                  <path d="M423.33 279.52c54.2,0 98.47,44.26 98.47,98.47l0 45.71c0,11.4 -9.25,20.65 -20.65,20.65l-155.64 0c-11.4,0 -20.65,-9.25 -20.65,-20.65l0 -45.71c0,-54.2 44.27,-98.47 98.47,-98.47zm-182.05 256.57c-27.16,0 -27.16,-41.3 0,-41.3l364.1 0c27.16,0 27.16,41.3 0,41.3l-364.1 0zm0 177.71c-27.16,0 -27.16,-41.29 0,-41.29l364.1 0c27.16,0 27.16,41.29 0,41.29l-364.1 0zm0 -88.85c-27.16,0 -27.16,-41.3 0,-41.3l364.1 0c27.16,0 27.16,41.3 0,41.3l-364.1 0zm-121.37 -614.55l465.97 0c5.7,0 10.86,2.31 14.6,6.05l140.87 140.87c4.03,4.03 6.05,9.32 6.05,14.6l0 643.69c0,11.4 -9.25,20.65 -20.65,20.65l-606.84 0c-11.4,0 -20.65,-9.25 -20.65,-20.65l0 -784.56c0,-11.4 9.25,-20.65 20.65,-20.65zm457.42 41.29l-436.78 0 0 743.28 565.56 0 0 -614.5 -128.78 -128.78zm-154 57.32c45.98,0 83.25,37.28 83.25,83.26 0,45.97 -37.27,83.25 -83.25,83.25 -45.98,0 -83.25,-37.28 -83.25,-83.25 0,-45.98 37.27,-83.26 83.25,-83.26zm0 41.3c-23.18,0 -41.96,18.78 -41.96,41.96 0,23.17 18.78,41.96 41.96,41.96 23.18,0 41.96,-18.79 41.96,-41.96 0,-23.18 -18.78,-41.96 -41.96,-41.96zm0 170.5c-31.4,0 -57.18,25.77 -57.18,57.18l0 25.07 114.36 0 0 -25.07c0,-31.41 -25.78,-57.18 -57.18,-57.18z" />
                </g>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home
