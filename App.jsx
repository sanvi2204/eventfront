
import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Home  from './pages/Web/Home'
import Login from './pages/Web/Login'
import Service from './pages/Web/service'
import Schedule from './pages/Web/schedule'
import Register from './pages/Web/Register'
import UserLayout from './layout/UserLayout'
import UserDashboard from './pages/User/UserDashboard'
import UserDetails from './pages/User/UserDetails'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import NotFound from './pages/Web/NotFound'
import HomeLayout from './layout/HomeLayout'
import AdminUser from './pages/Admin/AdminUser'
import ContactPage from './pages/Web/ContactPage'
import Leftbar from './components/Admin/Leftbar'
import PaymentDetails from './pages/Web/PaymentDetails'
import PaymentConfirmation from './pages/Web/PaymentConfirmation'
import Consult from './pages/Web/Consult'
import About from './pages/Web/about'
import EventGallery from './pages/Web/EventGallery'
import BookingPage from './pages/Web/BookingPage'
import ReviewPage from './pages/Web/ReviewPage'
import ThankYouPage from './pages/Web/ThankYouPage';
const App = () => {
  const [showNav, setShowNav] = useState(false);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/Home' element={<Home />} />
                        <Route path='/Login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/service' element={<Service />} />
                        <Route path='/schedule' element={<Schedule />} />
                        <Route path='/about' element={<About />} />

                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/Consult" element={<Consult/>}/> 
                        <Route path="/Leftbar" element={<Leftbar/>}/> 
                        <Route path="/PaymentDetails" element={<PaymentDetails/>}/> 
                        <Route path="/PaymentConfirmation" element={<PaymentConfirmation/>}/> 
                        <Route path='/about' element={<About />} />
                        <Route path='/EventGallery' element={<EventGallery />} />
                        <Route path='/BookingPage' element={<BookingPage />} />
                        <Route path='/ReviewPage' element={<ReviewPage />} />
                        <Route path="/ThankYouPage" element={<ThankYouPage />} />
                    </Route>

                    <Route element={<UserLayout />}>
                        <Route path='/user/dashboard' element={<UserDashboard />} />
                        <Route path='/user/info' element={<UserDetails />} />
                    </Route>

                  
                    <Route element={<AdminLayout showNav={showNav} setShowNav={setShowNav} />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/users' element={<AdminUser />} />
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App