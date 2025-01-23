import React from 'react'
import { useNavigate } from 'react-router-dom'

const Instuction = () => {

    const navi = useNavigate();


    function gamehandler(){
        navi("/logi")

    }

  return (
    <div className='bg-black text-2xl font-bold text-white sm:h-screen'>

<div>
     <div><h1 className='pt-12 sm:p-10 sm:text-7xl sm:font-bold sm:text-red-700'>Instruction to Play Game</h1></div>
     </div>


     <div className='flex justify-around'> 
        
     <div>
            <img src="https://i.pinimg.com/736x/22/9a/b9/229ab97c9bec5f6ebf89e491faf21cf4.jpg" alt="" className='h-[600px]' />
        </div>

     <div className='flex w-[600px] flex-col items-center justify-center text-balance border-red-400 text-red-500'>
        <p>Select a Number to Start a Game</p>
        <p>Click on Dice Image to Play a Game</p>
        <p>If your choosen Number matched then value decrease else it increases until u get the score of "-36" and the Game is reset By Defautlt </p>
       </div>

     </div>


       

        <div>
            

<button onClick={gamehandler}
 className='text-3xl font-bold text-red-600'>Back to Game</button>
    


    
  
    
       
     </div>

     <div className='p-9 text-5xl font-extrabold text-slate-300 sm:p-0'>
     Happy Gaming !!
     </div>

    </div>
  )
}

export default Instuction
