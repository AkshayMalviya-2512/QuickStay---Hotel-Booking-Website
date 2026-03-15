import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import AllRooms from './Pages/AllRooms'
import RoomDetails from './Pages/RoomDetails'
import MyBookings from './Pages/MyBookings'
import Layout from './Pages/Admin/AdminLayout'
import Dashboard from './Pages/Admin/Dashboard'
import AddRoom from  './Pages/Admin/AddRooms'
import ListRooms from './Pages/Admin/ListRooms'
import RegisterHotel from './Components/Admin/RegisterHotel'
import AdminRoute from './Components/Admin/AdminRoute'

const App = () => {

  const isOwnerPath = useLocation().pathname.includes('/admin');
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          {/* User Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path='/my-bookings' element={<MyBookings />} />

          {/*Owner Routes */}
          <Route path="/register-hotel" element={<RegisterHotel />} />
          <Route path='/admin' element={
            <AdminRoute>
              <Layout />
            </AdminRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="add-rooms" element={<AddRoom />} />
            <Route path="list-rooms" element={<ListRooms />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App