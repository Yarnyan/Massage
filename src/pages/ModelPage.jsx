import React from 'react'
import HeaderAppointment from '../components/header/HeaderAppointment';
import ScrollButton from '../components/ScrollButton/ScrollButton';
import Footer from '../components/footer/Footer';
import Model from '../components/model/Model';
export default function ModelPage() {
    return (
        <div className="appointment-page">
            <HeaderAppointment />
            <Model />
            <Footer />
            <ScrollButton />
        </div>
    )
}
