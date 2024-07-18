import React from 'react'
import HeaderAppointment from '../components/header/HeaderAppointment'
import Models from '../components/models/Models'
import Banners from '../components/banners/Banners'
import Breadcrumb from '../components/breadcrumbs/Breadcrumb'
import ScrollButton from '../components/ScrollButton/ScrollButton';
export default function GirlsPage() {
  return (
    <div>
      <HeaderAppointment />
      <Banners />
      <Breadcrumb />
      <Models text={false}/>
      <ScrollButton />
    </div>
  )
}
