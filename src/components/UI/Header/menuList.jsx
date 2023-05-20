import React from 'react'
import { HomeIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid'

export const menuList = [
  {
    id: 1,
    title: 'Home',
    src: '/Home',
    component: <HomeIcon width="2.5em" height="2.5em" />,
  },
  {
    id: 2,
    title: 'Projects',
    src: '/Projects',
    component: <ComputerDesktopIcon width="2.5em" height="2.5em" fill=""/>,
  },
]
