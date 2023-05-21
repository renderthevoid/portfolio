import React from 'react'
import { routes } from '../router/root'
import { Navigate, Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={<route.element />}
            key={route.path}
            exact={route.exact}
          />
        ))}
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default AppRouter
