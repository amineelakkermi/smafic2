import React from 'react';
import styles from '../../style';
import { motion } from 'framer-motion';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './products.css';
import { textVariant } from '../../constants/motion';
import { productsData } from '../../constants/data';

const Products = () => {
  return (
    <section className={`${styles.padding} w-full bg-gray-100 flex flex-col`}>
       <motion.h1
        variants={textVariant(0.3)}
        initial="hidden"
        whileInView="show"
        className={`${styles.title} text-center text-black`}>Our Products</motion.h1>
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
  {productsData.map((item, index) => (
    <SwiperSlide key={item.id} className="flex items-center flex-col gap-3">
      <motion.div
        initial={{ opacity: 0, translateX: -50 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.3, delay: index * 0.4 }}
        className="flex items-center flex-col gap-3"
      >
        <div>
          <img src={item.img} alt="Product" className="w-[100%] h-[100%] rounded-[25px] z-10" />
        </div>
        <span className={`${styles.paragraph} text-center mt-2`}>{item.titleEn}</span>
      </motion.div>
    </SwiperSlide>
  ))}
</Swiper>

     </div>
    </section>
  );
};

export default Products;
