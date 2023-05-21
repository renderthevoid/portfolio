import Home from '../Pages/Home'
import NotFound from '../Pages/NotFound'
import About from '../Pages/About'

export const routes = [
  { path: '/', element: Home, exact: true },
  { path: '/About', element: About },
]
