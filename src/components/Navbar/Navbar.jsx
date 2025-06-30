import React, { useState ,useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  if (isOpen) {
    document.addEventListener('mousedown', handleClickOutside)
  } else {
    document.removeEventListener('mousedown', handleClickOutside)
  }

  return () => {
    document.removeEventListener('mousedown', handleClickOutside)
  }
}, [isOpen])

  return (
    <div className=' text-white font-semibold fixed w-full md:fixed'>

       
      <div className='bg-orange-600 flex justify-between items-center py-2 px-4 mt-0 mb-5 '>
      <div className='flex items-center gap-2'>
        <img src={logo} className='h-10 w-10 object-contain rounded-full'></img>
        <div className='text-xl'>
          <h>DRetina</h>
        </div>
      </div>
      
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      
    
    
      
        <ul className='hidden md:flex gap-8 py-2 px-8 mt-5 mb-5'>
          <li><a href='#h'>Home</a></li>
          <li><a href='#d'>DRstages</a></li>
          <li><a href='#p'>PredictDR</a></li>
          <li><a href='#c'>Caretips</a></li>
          <li><a href='#a'>AboutUs</a></li>
          </ul>
      </div>
      {isOpen && (
        <ul ref={menuRef} className="bg-orange-600 flex flex-col gap-2 w-full md:hidden">
          <li><a href="#h" onClick={toggleMenu} className="block w-full px-4 py-2 hover:bg-orange-700">Home</a></li>
          <li><a href="#d" onClick={toggleMenu} className="block w-full px-4 py-2 hover:bg-orange-700">DRstages</a></li>
          <li><a href="#p" onClick={toggleMenu} className="block w-full px-4 py-2 hover:bg-orange-700">PredictDR</a></li>
          <li><a href="#c" onClick={toggleMenu} className="block w-full px-4 py-2 hover:bg-orange-700">Caretips</a></li>
          <li><a href="#a" onClick={toggleMenu} className="block w-full px-4 py-2 hover:bg-orange-700">AboutUs</a></li>
        </ul>
      )}
    </div>

    
    
  )
}

export default Navbar