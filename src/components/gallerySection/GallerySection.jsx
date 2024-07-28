import React from 'react';
import { about } from '../../assets';
import './gallerySection.css'
import styles from '../../style';
import { motion } from 'framer-motion';
import { textVariant } from '../../constants/motion';

const GallerySection = ({img , title}) => {
  return (
  <div className={`${styles.padding} relative imgContainer flex justify-start items-center`}>
  <div className='overlay'>
  <img src={img}/>
  </div>
  <div className='colorBg'></div>

  <div>
  <motion.h1
   variants={textVariant(0.3)}
   initial="hidden"
   whileInView="show"
   className={`galleryTitle md:text-[60px] text-[45px] md:max-w-[600px] w-full  xs:leading-[58.8px] leading-[68.8px] font-[600] text-white`}>{title}</motion.h1>
  </div>
  </div> 
   
 
  );
}

export default GallerySection;
