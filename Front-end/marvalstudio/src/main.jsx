import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AboutUs from './General/AboutUs';
import Home from './General/Home';
import Gallery from './General/Gallery';
import Services from './General/Services';
import Booking from './General/Booking';
import ContactUs from './General/ContactUs';
import Enquiry from './General/Enquiry';
import Team from './Team';
import ShowEnquiry from './admin/ShowEnquiry';
import BookingShow from './admin/Booking'; // ✅ NEW

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/team' element={<Team />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/services' element={<Services />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/enquiry' element={<Enquiry />} />
        <Route path='/admin/ShowEnquiry' element={<ShowEnquiry />} />
        <Route path='/admin/Booking' element={<BookingShow />} /> {/* ✅ NEW */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
