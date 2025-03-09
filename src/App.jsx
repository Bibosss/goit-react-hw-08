import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import { ContactsPage } from './pages/ContactsPage/ContactsPage'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import LoginPage from './pages/LoginPage/LoginPage'
import Layout from './Layout'
import { useDispatch, useSelector } from 'react-redux'
import { Suspense, useEffect } from 'react'
import { refreshUser } from './redux/auth/operations'
import { selectIsRefreshing } from './redux/auth/selectors'
import PrivateRoute from './PrivateRoute'
import RestrictedRoute from './RestrictedRoute'


const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='contacts'
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
          <Route path='/register' element={<RestrictedRoute component={<RegistrationPage />} redirectTo="/contacts" />} />
          <Route path='/login' element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App