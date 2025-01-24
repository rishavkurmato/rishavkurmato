import React from 'react'

const Head = () => {
  return (
    <div>
    <header>
    <ul className='flex justify-between p-4 bg-gray-500 text-white'>
    <a  href="#home" className="cursor-pointer ">Home</a>
    <a  href="#about" className="cursor-pointer">About</a>
    <a  href="#contact" className="cursor-pointer">Contact</a>
    <li  href="#blog" className="cursor-pointer">Blog</li>
    <li  href="#services"className="cursor-pointer">Services</li>
        <button className="bg-black text-white rounded-md">Click me</button>
    </ul>
    </header>
    </div>
  )
}

export default Head



