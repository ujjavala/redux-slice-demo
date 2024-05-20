import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import StudentPage from '../views/StudentPage'
/**
 * The wrapper for all the routes
 * @returns {React.ReactElement}
 */
// export default function AppRoutes({ action }) {
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<StudentPage />} />
      </Routes>
    </BrowserRouter>
  )
}
