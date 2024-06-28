import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../Styles/navbar.css'
import HomeIcon from './ai-user-stroke-rounded.tsx'
import Logo from "../assests/images/logo.jpg"
import HamMenu from '../assests/images/hamMenu1.png'
import Close from '../assests/images/Close.png'

export default function Navbar() {
  const [toggle,setToggle] = useState(false);
  <HamMenu/>
  return (
    <>
    <div className='w-screen h-[10vh] Navbar' >
    <ul className='flex justify-start ml-10 mt-2.5 items-center fixed list-none h-12.6 bg-white'>
      <li><img className="w-[3.2rem] h-[3.2rem]" src={Logo} alt='demo.jpg'/>
      </li></ul>
    <ul className='list-none flex justify-center gap-12 ml-[36rem] fixed items-center text-white'>
            <li><Link to={'/home'} className='decoration-none text-white'>HOME</Link></li>
            <li><Link to={'/resume'} className='decoration-none text-white'>RESUME</Link></li>
            <li><Link to={'/project'} className='decoration-none text-white'>PROJECT</Link></li>
            <li><Link to={'/contact'} className='decoration-none text-white'>CONTACT</Link></li>
            <li>
               <ul className='Flex1'>
                  <li><HomeIcon/></li>
                  <li><HomeIcon/></li>
                  <li><HomeIcon/></li>
              </ul>
            </li>
        </ul>
        <div className='sm:hidden md:hidden flex flex-1 items-center justify-end'>
          <img 
          src={toggle? Close :HamMenu} 
          alt='demo.jpg'
          className='w-8 mt-3 mr-3' 
          onClick={() => setToggle((prev) => !prev)}/>
          <div
          className={`${
            !toggle ?"hidden" : "flex" 
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}></div>
        </div>
    </div>
        
    </>
    
  )
}
