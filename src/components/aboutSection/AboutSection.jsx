import React from 'react'
import styles, { layout } from '../../style'
import { about } from '../../assets'
import './aboutSection.css'
import { motion } from 'framer-motion'
import { slideIn } from '../../constants/motion'



const AboutSection = () => {
  return (
    <section className={`${layout.section} ${styles.paddingX} bg-gray-100 gap-16`}>
    <motion.div
    variants={slideIn('left' , 'tween' , '0.6' , '1.2')}
    initial='hidden'
    animate='show'
    className={`${layout.sectionImg} max-w-[550px] h-[550px]`}>
        <img src={about} alt="About" className='rounded-[35px] w-[100%] h-[550px]' />
    </motion.div>
    <motion.div
    variants={slideIn('right' , 'tween' , '0.6' , '1.2')}
    initial='hidden'
    animate='show'
    className={`${layout.sectionInfo}`}>
    <h2 class="relative line inline-block text-[16px] text-orange">Best Quality</h2>
    <h1 className={`${styles.title} font-bold text-blue my-5`}>Excellent Quality and Services</h1>
     <p className={`${styles.paragraph}`}>
     Our evolving brand symbolizes past achievements and future aspirations.
    We are dedicated to delivering exceptional quality and service, with employees who take pride in our customer-focused mission.
   </p>
    </motion.div>
    </section>
  )
}

export default AboutSection