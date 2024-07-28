import React from 'react'
import { AboutSection, GallerySection, Hero, Navbar, Products, ServicesSection, VideoBackground } from '../components'
import { about, galleryImg1, galleryImg2, img62, lighting } from '../assets'

const Home = () => {
  return (
    <div>
      <Hero /> 
      <AboutSection />
      <GallerySection img={galleryImg1} title="Innovative Metal Solutions" /> 
      <ServicesSection />
      <GallerySection img={galleryImg2} title="Crafting Quality Metal Products" /> 
      <Products />
      <GallerySection img={img62} title="Your Trusted Metal Fabrication Partner" /> 


    </div>
  )
}

export default Home