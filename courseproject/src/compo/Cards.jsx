import React from 'react'

const Cards = ({title,description,image}) => {
  return (
    <div className='App p-3 pt-10'>
      <div className='flex h-[260px] w-[320px] flex-col items-center rounded-lg border-x-2'>
        <h1 className='font-serif text-xl font-bold'>{title.slice(0,20)}...</h1>
        <div></div>
        <img className='h-[200px] w-[300px] rounded-lg'
        src={image.url} alt="" />
        <p className='text-center'>{description.slice(0,70)}...</p>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Cards
