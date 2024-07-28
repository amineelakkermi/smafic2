import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../style'
import { about, smafic } from '../../assets'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './footer.css'


const Footer = () => {
  return (
    <footer className={`relative flex md:flex-row flex-col  md:justify-between justify-center md:items-start items-center ${styles.padding}`}>
    
    

    <div className='flex  md:items-start items-center flex-col gap-2 md:mt-0 mt-10'>
    <Link to='/home'><img src={smafic} alt="logo" className="w-[200px] h-[80px]  object-cover" /></Link>
    <p className='text-textGrey max-w-[390px] md:text-start text-center'>
    In Smafic, we guarantee our ability to deliver services across a diverse range of scales.
    Our commitment to quality ensures that we meet the specific needs of each project.
    </p>
    </div> 

    <div className='flex md:flex-row flex-col md:justify-between justify-center md:items-start items-center md:gap-[80px] gap-[50px] md:mt-0 mt-10 '>
      <ul className='flex flex-col gap-3 md:text-start text-center'>
       <li><h3 className='text-blue text-[20px] font-semibold'>Quick Links</h3></li>
       <Link className='text-textGrey text-[16px]'>Home</Link>
       <Link className='text-textGrey text-[16px]'>About</Link>
       <Link className='text-textGrey text-[16px]'>Services</Link>
       <Link className='text-textGrey text-[16px]'>Contact</Link>
      </ul>
      <ul className='flex flex-col justify-center items-center gap-3 md:text-start text-center'>
       <li><h3 className='text-blue text-[20px] font-semibold'>Social Media</h3></li>
      <div className='flex items-center gap-4 mt-5'>
      <div className='circle-icons w-[40px] h-[40px] flex justify-center items-center rounded-full bg-blue'>
       <a href='https://www.facebook.com/smafic/?locale=fr_FR' target='blank' className='cursor-pointer'>
        <FaFacebook className="text-white" size={25} />
       </a>
       </div>
       <div className='circle-icons w-[40px] h-[40px] flex justify-center items-center rounded-full bg-blue'>
       <a href='https://www.instagram.com/smafic/' target='blank'  className='cursor-pointer'>
       <FaInstagram className="text-white" size={25} />
       </a>
       </div>
       <div className='circle-icons w-[40px] h-[40px] flex justify-center items-center rounded-full bg-blue'>
       <a href='https://www.linkedin.com/company/smafic/' target='blank' className='cursor-pointer'>
        <FaLinkedin className="text-blue-400 text-white" size={25} />
       </a>
      </div> 
      </div>
      </ul>
      <ul className='flex flex-col gap-3 md:text-start text-center'>
       <li><h3 className='text-blue text-[20px] font-semibold'>Contact</h3></li>
       <li><a href="#" className='text-textGrey text-[16px]'>Email: info@smafic.com</a></li>
       <li><a href="#" className='text-textGrey'>Phone Number: 00966559313878</a></li>
      </ul>
    </div>    


    <div className='footerBg'></div>

    </footer>
  )
}

export default Footer