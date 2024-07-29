import React from 'react'
import { GallerySection2, Hero, Navbar, Products, QualitySection, ServicesSection, Testimonials, VideoBackground } from '../components'
import { about, galleryImg1, galleryImg2, img62, lighting } from '../assets'

const Home = () => {
  return (
    <div>
      <Hero /> 
      <QualitySection />
      <GallerySection2 img={galleryImg1}  title="Crafting Quality Metal Products" text="At Smafic, we specialize in crafting top-notch metal products, ensuring precision and excellence in every piece." buttonText="Our Services" />
      <ServicesSection />
      <GallerySection2 img={galleryImg2}  title="Crafting Quality Metal Products" text="At Smafic, we specialize in crafting top-notch metal products, ensuring precision and excellence in every piece." buttonText="Our Products" />
      <Products />
      <GallerySection2 img={img62}  title="Crafting Quality Metal Products" text="At Smafic, we specialize in crafting top-notch metal products, ensuring precision and excellence in every piece." buttonText="Our Products" />
      <Testimonials />
    
    </div>
  )
}

export default Home