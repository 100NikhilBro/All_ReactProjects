import React from 'react'
import { Link } from 'react-router-dom'

const DPage = () => {
  return (
    <div className='h-screen bg-black sm:flex sm:justify-around'>


      <div className='sm:flex sm:justify-center'>
        <img 
         src="https://st4.depositphotos.com/1028436/22211/i/450/depositphotos_222117870-stock-photo-dice-black-background-illustration.jpg" alt="" />
      </div>


      <div className='justify-center sm:flex sm:flex-col sm:gap-y-1'>
     <h1 className='p-5 text-5xl font-extrabold text-white sm:px-2 sm:text-[120px]'>DICE GAME</h1>
      <Link to="/logi"><button className='rounded-lg bg-white p-2 text-xl font-bold text-black transition-all duration-200 hover:bg-black hover:text-white hover:shadow-md hover:shadow-white sm:w-[300px]'>Play Now</button></Link>
      </div>
      
    </div>
  )
}

export default DPage
