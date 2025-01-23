import React, { useContext } from 'react'
import  { FoodContext } from '../context/FoodContext'

const NavBar = () => {


    const {BreakHandler, AllHandler, DinnerHandler, LunchHandler,state1,state2,state3,state4,changehandler,text} = useContext(FoodContext);

    console.log(text)
  return (
    <div className='bg-black h-fit text-slate-300'>
      

      <div className='p-10 sm:flex sm:flex-col sm:p-5 sm:space-y-24'>

        <div className='sm:flex sm:justify-around '>

        <div className='pt-6'>
            <h1 className='font-serif text-5xl font-bold'>H<span className='text-blue-600'>ig</span>h <span className='text-red-500'>On</span> F<span className='text-green-500'>oo</span>d</h1>
        </div>



        <div className='py-10'>
            <input 
             onChange={changehandler}
             className='p-2 font-bold text-center border-2 border-red-500 rounded-lg'
             type="text" placeholder="Search Food..." name="textdata" id=""  />
        </div>
        
        </div>


        <div className='grid grid-cols-2 gap-4 text-xl font-bold sm:flex sm:space-x-5 sm:justify-center'>

            <button onClick={AllHandler}
            className={`p-1 border-2 ${state1?"opacity-50":""} border-red-500 rounded-lg lg:w-[100px]`}>All</button>

            <button onClick={BreakHandler}
             className={`p-1 border-2 border-red-500 rounded-lg lg:w-[130px] ${state2?"opacity-50":""}`}>Breakfast</button>

            <button onClick={LunchHandler}
            className={`p-1 border-2 border-red-500 rounded-lg ${state3?"opacity-50":""} lg:w-[100px]`}>Lunch</button>
            <button onClick={ DinnerHandler}
            className={`p-1 border-2 border-red-500 rounded-lg lg:w-[100px] ${state4?"opacity-50":""}`}>Dinner</button>
        </div>

      </div>


    </div>
  )
}

export default NavBar
