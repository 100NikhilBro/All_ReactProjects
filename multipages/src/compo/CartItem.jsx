import React from 'react';

const CartItem = ({val}) => {

  return (
    <div>



      <div className='flex flex-col items-center justify-center border-b-2'>

      <div className='pt-4'>
        <img src={val.image} alt="" className='h-[200px] w-[200px]' />
      </div>

      <div>
        <h1 className='font-bold'>{val.title.slice(0,30)}...</h1>
      </div>

      <div className='text-sm text-slate-400'>
        {val.description.slice(0,60)}..
      </div>

      <div className='text-xl font-bold text-green-500'>
        ${val.price}
      </div>

      </div>


     


  



     
    </div>
  )
}

export default CartItem
