import { Route, Routes, useLocation, Navigate } from 'react-router-dom'

import { LoginPage } from 'pages/loginPage'
import { HomePage } from 'pages/homePage'
import { NotFound } from 'components/shared/notFound'
import { Layout } from 'components/shared/layout'

export const App = () => (
  <Routes>
    <Route path="login" element={<LoginPage />} />
    <Route
      path="/"
      element={
        <AuthGuard>
          <Layout />
        </AuthGuard>
      }
    >
      <Route path="">
        <Route index={true} element={<HomePage />} />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
)

const AuthGuard = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = Boolean(localStorage.getItem('access_token'))
  const location = useLocation()

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}
