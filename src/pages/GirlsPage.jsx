import React from 'react'
import HeaderAppointment from '../components/header/HeaderAppointment'
import Models from '../components/models/Models'
import Banners from '../components/banners/Banners'
export default function GirlsPage() {
  return (
    <div className='appointment-page'>
      <HeaderAppointment />
      <Banners />
      <Models />
    </div>
  )
}
