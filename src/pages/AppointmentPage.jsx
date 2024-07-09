import React from 'react';
import HeaderAppointment from '../components/header/HeaderAppointment';
import ScrollButton from '../components/ScrollButton/ScrollButton';
import Footer from '../components/footer/Footer';
import Vacancy from '../components/vacancy/Vacancy';

export default function AppointmentPage() {
  return (
    <div className="appointment-page">
      <HeaderAppointment />
      <Vacancy />
      <Footer />
      <ScrollButton />
    </div>
  );
}