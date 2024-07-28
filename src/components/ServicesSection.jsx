import React from 'react'
import styles from '../style'
import { servicesData } from '../constants/servicesData'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { textVariant } from '../constants/motion';

const SvgIcon = ({ svg }) => {
    return <div dangerouslySetInnerHTML={{ __html: svg }} />;
  };

const ServicesSection = () => {
  return (
    <section className={`${styles.padding} w-full bg-white flex flex-col justify-center items-center z-10`}>
       <motion.h1
        variants={textVariant(0.3)}
        initial="hidden"
        whileInView="show"
       className={`${styles.title} text-center text-black`}>Our Services</motion.h1>
       <div className={`w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-6 gap-y-16 my-16`}>
        {
            servicesData.map((item , index) => (
            <motion.div
            key={item.id}
            initial={{ opacity: 0 , translateX: -50, }}
            whileInView={{ opacity: 1 , translateX: 0 }}
            transition={{ duration: 0.3 , delay : index * 0.4 }}
            className='flex items-center flex-col gap-3 transition hover:bg-slate-300 px-4 py-8 rounded-[35px]'>
            <SvgIcon svg={item.svgIcon} />
            <span className={`${styles.paragraph} text-center`}>{item.titleEn}</span>
            </motion.div>
            ))
        }
        </div>
        <button className={`buy-now flex gap-2 justify-center items-center bg-blue w-[200px] h-[70px] my-10 `}>
        <Link to="/services" className='text-white font-semibold'>View All</Link>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short text-white" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
        </svg>
        </button>
    </section>
  )
}

export default ServicesSection