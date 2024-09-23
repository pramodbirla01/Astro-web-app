import Navbar from "./Component/Header/Navbar";
import TopBar from "./Component/Header/TopBar";
import Home from "./Component/Home/Home";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import WhatWeDo from "./Component/Home/What_we_do";
import OurService from "./Component/Services/OurServices";
import PersonalHoro from "./Component/Services/PersonalHoro";
import Achivment from "./Component/Overview.jsx/Achivment";
import ClientSays from "./Component/Client/ClientSays";
import Footer from "./Component/Footer/Footer";
import ContectHome from "./Component/ContactUs/ContectHome";
import ContactAddress from "./Component/ContactUs/ContactAddress";
import ContactAboutme from "./Component/ContactUs/ContactAboutme";
import ContactMap from "./Component/ContactUs/ContactMap";
import Blog from "./Component/Blog/Blog";
import AppointmentHome from "./Component/Appointment/AppointmentHome";
import AppointmentForm from "./Component/Appointment/AppointmentForm";

function DefaultComponent() {
  return (
    <>
      <Home />
      <WhatWeDo />
      <OurService />
      <PersonalHoro />
      <Achivment />
      <ClientSays />
    </>
  );
}
function Appoint() {
  return(
    <>
    <AppointmentHome/>
    <AppointmentForm/>
    </>
  )
}
function ContactUs() {
  return(
    <>
    <ContectHome/>
    <ContactAddress/>
    <ContactAboutme/>
    <ContactMap/>
    </>
  )
}
function Layout() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DefaultComponent />} />
            <Route path="/location" element={<ContactMap />} />
            <Route path="/contacts" element={<ContactAddress/>}/>
            <Route path="/appointment" element={<Appoint/>}/>
            <Route path="/blog" element={<Blog/>}/> 
            <Route path="/contact_section" element={<ContactUs/>}/>
            <Route path="/appointment_form" element={<AppointmentForm/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
