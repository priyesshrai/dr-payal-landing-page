import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Map from '@/components/Map'
import Testimonials from '@/components/Testimonials'
import React from 'react'

export default function page() {
  return (
    <>
      <Header />
      <Hero/>
      <About/>
      <Map/>
      <Testimonials/>
      <Footer/>
    </>
  )
}
