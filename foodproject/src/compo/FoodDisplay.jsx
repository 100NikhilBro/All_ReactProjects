import React from 'react'
import { FoodContext } from '../context/FoodContext';
import  { useContext } from 'react';
import Cards from './Cards';

const FoodDisplay = () => {

    const {type} = useContext(FoodContext);

  return (

    <div className=''>

    <div className='h-full text-white bg-black opacity-90'>
      

      <div className="p-10 gap-x-4 lg:grid lg:grid-cols-3 sm:gap-2 sm:grid sm:grid-cols-2 xl:grid-cols-2">

      
        {
        type.map((value)=>{
            return(<Cards {...value} key={value.id}></Cards>)
        })
      }
      


    </div>

    </div>
    </div>
  )
}

export default FoodDisplay
