import React from 'react';
import './gallerySection2.css'
import { motion } from 'framer-motion';
import styles from '../../style';
import { textVariant } from '../../constants/motion';
import { Link } from 'react-router-dom';

const GallerySection2 = ({img , title , buttonText , text}) => {
  return (
  <section className={`${styles.padding} relative imgContainer2`}>
  <div className='overlay2'>
  <img src={img}/>
  </div>
  <div className='colorBg2'></div>

  <div className='w-full h-screen justify-center items-center flex flex-col gap-5 z-10'>
  <motion.h1
    variants={textVariant(0.3)}
    initial='hidden'
    whileInView='show'
   className={`galleryTitle2 transparent-text md:text-[60px] text-[45px] md:max-w-[600px] w-full  xs:leading-[58.8px] leading-[68.8px] font-[600] text-white text-center`}>{title}
   </motion.h1>
   <motion.p
    variants={textVariant(0.5)}
    initial='hidden'
    whileInView='show'
   className={`${styles.paragraph} text-center max-w-[500px] text-white mt-5`}>
   {text}
   </motion.p>
   <button className={`buy-now flex gap-2 justify-center items-center bg-blue w-[200px] h-[70px] my-5 `}>
        <a href="#services-section" className='text-white font-semibold'>{buttonText}</a>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short text-white" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
        </svg>
   </button>
  </div>
  </section> 
   
 
  );
}

export default GallerySection2;
