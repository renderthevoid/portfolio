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
          />
        ))}
        <Route path="/*" element={<Navigate to="/Home" replace />} />
      </Routes>
    </div>
  )
}

export default AppRouter
