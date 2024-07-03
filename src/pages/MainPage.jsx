import React from 'react'
import Header from '../components/header/Header'
import Models from '../components/models/Models'
import Advantages from '../components/advantages/Advantages'
import Liaison from '../components/liaison/Liaison'
import Programs from '../components/programs/Programs'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/footer/Footer'
import Faq from '../components/faq/Faq'
import ScrollButton from '../components/ScrollButton/ScrollButton'
export default function MainPage() {
  return (
    <div> 
        <Header />
        <Models />
        <Advantages />
        <Liaison />
        <Programs />
        <Testimonials />
        <Faq />
        <Footer />
        <ScrollButton />
    </div>
  )
}