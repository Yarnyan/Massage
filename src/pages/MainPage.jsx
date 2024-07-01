import React from 'react'
import Header from '../components/header/Header'
import Models from '../components/models/Models'
import Advantages from '../components/advantages/Advantages'
import Liaison from '../components/liaison/Liaison'
export default function MainPage() {
  return (
    <div> 
        <Header />
        <Models />
        <Advantages />
        <Liaison />
    </div>
  )
}