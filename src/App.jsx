import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Analytics from './pages/Dashboard/Analytics'
import Calendar from './pages/Calendar'
import Profile from './pages/Profile'
import FormElements from './pages/Form/FormElements'
import FormLayout from './pages/Form/FormLayout'
import Tables from './pages/Tables'
import Settings from './pages/Settings'
import Chart from './pages/Chart'
import Alerts from './pages/UiElements/Alerts'
import Buttons from './pages/UiElements/Buttons'
import SignIn from './pages/Authentication/SignIn'
import SignUp from './pages/Authentication/SignUp'
import Login from './pages/Authentication/Login'
import Register from './pages/Authentication/Register'
import User from './pages/User'
import { Provider, useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './Redux/Store'
import useAuthState from './hooks/useAuthState'
import Properties from './pages/Properties/Properties'
import Testimonials from './pages/Testimonial'
import PropertyView from './pages/PropertyView'


const App = () => {
  const [loading, setLoading] = useState(true);


  const preloader = document.getElementById('preloader')

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none'
      setLoading(false)
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    !loading && (
      <>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes>
              <Route path='/Admin' element={useAuthState ? <Analytics /> : <Login />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/forms/form-elements' element={<FormElements />} />
              <Route path='/forms/form-layout' element={<FormLayout />} />
              <Route path='/tables' element={<Tables />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/chart' element={<Chart />} />
              <Route path='/ui/alerts' element={<Alerts />} />
              <Route path='/ui/buttons' element={<Buttons />} />
              <Route path='/auth/signin' element={<SignIn />} />
              <Route path='/auth/signup' element={<SignUp />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/user' element={<User />} />
              <Route path='/properties' element={<Properties />} />
              <Route path='/testimonial' element={<Testimonials />} />
              <Route path='/Single' element={<PropertyView />} />
            </Routes>
          </PersistGate>
        </Provider>
      </>
    )
  )
}

export default App
