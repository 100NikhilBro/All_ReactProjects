import React from 'react'
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      
      <div className='relative flex justify-around shadow-md'>

       <div>
       <Link to = "/">
        <img className='h-[100px] w-[120px]'
        src='https://img.freepik.com/premium-vector/shopping-logo-design_852937-4657.jpg?semt=ais_incoming' alt=''></img>
        </Link>
       </div>


        <div className='flex space-x-5 pt-7'>

        <Link to="/" className='h-[40px] rounded-lg rounded-b-lg border-b-2 border-black bg-slate-300 p-1 text-xl font-bold transition-all duration-200 hover:bg-slate-500 hover:text-white'>Home</Link>          
        <Link to="/cart" className='h-[40px] rounded-b-lg border-t-2 border-black bg-slate-300 p-1 text-xl font-bold transition-all duration-200 hover:border-black hover:border-t-slate-950 hover:bg-slate-500 hover:text-white'>
        Cart</Link>
     
        </div>

     

      </div>

    </div>
  )
}

export default Nav

