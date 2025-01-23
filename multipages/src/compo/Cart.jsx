import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const navigate = useNavigate();


    const[totalAmount,setTotal] = useState(0);




    function NavHandler(){
          navigate("/");
    }


    const arr = useSelector(state => state.Cart.arr);

   
    

    useEffect(()=>{
        setTotal(arr.reduce((acc,curr)=>Number(acc+curr.price),0));
    },[arr])
    

    console.log(arr);

    

  return (
    <div>
      
      {
        arr.length>0 ? (<div className='flex flex-col items-center justify-center gap-5 pb-5 lg:flex lg:flex-row lg:items-start lg:justify-around lg:space-x-4'>
          <div className=''>
          {
               arr.map((val)=>{
                return(<CartItem val={val} key={val.id}></CartItem>)
                
               })
            }

          </div>

          
          <div className='group flex h-[380px] w-[350px] flex-col items-center justify-center space-y-11 rounded-lg border p-2 pt-5 opacity-40 shadow-lg transition-all duration-200 hover:opacity-100 sm:items-start'>

           
           <div className='sm:flex sm:flex-col sm:items-start sm:space-y-11'>
           <p className='text-xl font-bold text-green-500'>YOUR CART</p>
            <h1 className='text-3xl font-medium text-green-500'>SUMMARY</h1>
           </div>

           <div className='flex flex-col items-start space-y-11 text-2xl font-bold text-green-500'> 
            Total Items:{arr.length}
           </div>


           <div className='flex flex-col items-start justify-start text-xl font-bold text-green-500'>

          Total Amount: ${totalAmount}

            <button className='rounded-lg bg-green-200 p-1 text-xl font-bold text-green-500 transition-all duration-200 group-hover:bg-green-500 group-hover:text-white'>Checkout Now</button>

      
           

           </div>




          </div>

        </div>):(  <div>
            <h1 className='flex justify-center p-2 pt-10 text-2xl font-bold'>Cart is Empty</h1>
            <button onClick={NavHandler}
             className='rounded-full bg-slate-600 px-2 py-1 text-xl font-bold text-white transition-all duration-200 hover:bg-black hover:text-white'>Shop Now</button>
          </div>)
}

    



    </div>
  )
}

export default Cart
