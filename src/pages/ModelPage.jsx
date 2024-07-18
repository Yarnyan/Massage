import React from 'react'
import HeaderAppointment from '../components/header/HeaderAppointment';
import ScrollButton from '../components/ScrollButton/ScrollButton';
import Footer from '../components/footer/Footer';
import Model from '../components/model/Model';
import Breadcrumb from '../components/breadcrumbs/Breadcrumb'
export default function ModelPage() {
    return (
        <div className="appointment-page">
            <HeaderAppointment />
            <Breadcrumb />
            <Model />
            <Footer />
            <ScrollButton />
        </div>
    )
}
