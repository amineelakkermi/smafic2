import React from 'react'
import styles from '../../style';
import { motion } from 'framer-motion';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './testimonials.css';
import { textVariant } from '../../constants/motion';
import { feedBack } from '../../constants/data';

const Testimonials = () => {
  return (
    <section className={`${styles.padding} w-full bg-gray-100 flex flex-col`}>
    <motion.h1
     variants={textVariant(0.3)}
     initial="hidden"
     whileInView="show"
     className={`${styles.title} text-center text-black`}>Testimonials</motion.h1>
  <div>
  <Swiper
modules={[Navigation, Pagination, Scrollbar, A11y]}
spaceBetween={30}
/*navigation*/
className="my-16 cursor-pointer"
breakpoints={{
 640: {
   slidesPerView: 1,
   spaceBetween: 10,
 },
 972: {
   slidesPerView: 2,
   spaceBetween: 20,
 },
 1024: {
   slidesPerView: 3.25,
   spaceBetween: 30,
 },
}}
>

</Swiper>

  </div>
 </section>
  )
}

export default Testimonials