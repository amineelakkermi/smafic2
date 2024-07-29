import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../style'
import { about, bgFooter, smafic } from '../../assets'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './footer.css'


const Footer = () => {
  return (
    <footer className={`w-full footer bg-gray-100 relative flex md:flex-row flex-col  md:justify-between justify-center md:items-start items-center ${styles.padding}`}>
     
  <div className='footerImg'>
    <img src={bgFooter} alt="" />
  </div>
  <div className='footerBg'>
  </div>

    <div className='flex md:items-start items-center flex-col gap-2 md:mt-0 mt-10 z-10'>
    <Link to='/home'><img src={smafic} alt="logo" className="w-[200px] h-[80px]  object-cover" /></Link>
    <p className='text-white max-w-[390px] md:text-start text-center'>
    In Smafic, we guarantee our ability to deliver services across a diverse range of scales.
    Our commitment to quality ensures that we meet the specific needs of each project.
    </p>
    </div> 

    <div className='flex md:flex-row flex-col md:justify-between justify-center md:items-start items-center md:gap-[80px] gap-[50px] md:mt-0 mt-10 z-10 '>
    <ul className='flex flex-col gap-3 md:text-start text-center'>
    <li><h3 className='text-white text-[20px] font-semibold'>Quick Links</h3></li>
    <li><Link className='text-[16px] duration-300 hover:text-orange font-medium text-white' to="/home">Home</Link></li>
    <li><Link className='text-[16px] duration-300 hover:text-orange font-medium text-white' to="/about">About</Link></li>
    <li><Link className='text-[16px] duration-300 hover:text-orange font-medium text-white' to="/services">Services</Link></li>
    <li><Link className='text-[16px] duration-300 hover:text-orange font-medium text-white' to="/contact">Contact</Link></li>
    </ul>

    <ul className='flex flex-col justify-center items-center gap-3 md:text-start text-center'>
  <li>
    <h3 className='text-white text-[20px] font-semibold'>Social Media</h3>
  </li>
  <li className='flex items-center gap-4 mt-5'>
    <div className='circle-icons w-[50px] h-[50px] flex justify-center items-center rounded-full bg-transparent'>
      <a href='https://www.facebook.com/smafic/?locale=fr_FR' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
        <FaFacebook className="text-white" size={25} />
      </a>
    </div>
    <div className='circle-icons w-[50px] h-[50px] flex justify-center items-center rounded-full bg-transparent'>
      <a href='https://www.instagram.com/smafic/' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
        <FaInstagram className="text-white" size={25} />
      </a>
    </div>
    <div className='circle-icons w-[50px] h-[50px] flex justify-center items-center rounded-full bg-transparent'>
      <a href='https://www.linkedin.com/company/smafic/' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
        <FaLinkedin className="text-white" size={25} />
      </a>
    </div>
  </li>
</ul>

      <ul className='flex flex-col gap-3 md:text-start text-center'>
       <li><h3 className='text-white text-[20px]  font-semibold'>Contact</h3></li>
       <li><a href="#" className='text-white text-[16px] duration-300 hover:text-orange  font-medium'>Email : info@smafic.com</a></li>
       <li><a href="#" className='text-white text-[16px] duration-300 hover:text-orange  font-medium'>Phone Number: 00966559313878</a></li>
      </ul>
    </div>    



    </footer>
  )
}

export default Footer