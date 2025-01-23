import React, {  } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/StoreSlice';

const Card = ({data}) => {



   const dispatch = useDispatch();


  function RemoveHandler(){
    dispatch(removeItem(data.id))

  }

  function AddHandler(){
    dispatch(addItem(data));
  }


  const arr = useSelector(state => state.Cart.arr);
    

  return (
    <div>

      <div className='group flex h-[420px] w-[280px] flex-col items-center space-y-6 rounded-lg border opacity-85 shadow-md transition-all duration-200 hover:scale-110 hover:opacity-100 hover:shadow-lg'>

        <div className='px-10 py-3 font-semibold'>{data.title.slice(0,19)}..</div>

        <div  className='px-2 text-sm text-slate-400'>{data.description.slice(0,50)}...</div>

        <div className='h-[200px] w-[200px]'>
            <img src={data.image} alt="" className='h-[200px] w-[200px]'/>
        </div>

        <div className='flex justify-between space-x-10'>
        <h1 className='h-fit w-[80px] rounded-full border-l-2 border-slate-900 bg-slate-200 p-2 font-bold text-slate-800 transition-all duration-300 group-hover:shadow-sm group-hover:shadow-slate-500'>${data.price}</h1>
            {/* <button onClick={()=>StateHandler(data.id)}
             className={`rounded-full bg-slate-500 p-2 font-bold text-white transition-all duration-200 group-hover:bg-black`}>{state?"Remove Item":"Add To Cart"}</button> */}

{
    arr.some((p)=>p.id===data.id ) ? (<button className='rounded-full bg-slate-500 p-2 font-bold text-white transition-all duration-200 group-hover:bg-black' onClick={RemoveHandler}>Remove Item</button>) :(<button className='rounded-full bg-slate-500 p-2 font-bold text-white transition-all duration-200 group-hover:bg-black' onClick={AddHandler}>Add to cart</button>)
}

        </div>

      </div>

    </div>
  )
}

export default Card
