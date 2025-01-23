import React, { useContext,useEffect } from 'react'
import { DisContext } from '../context/DisContext'

const Filter = () => {

    const{data, DesHandler,
        DevHandler,
        BusHandler,
        LifeHandler,AllHandler,state,course,APicall,}  = useContext(DisContext);

  useEffect(()=>{
        APicall();
    },[])

    
  return (
    <div className='bg-black text-white'>
      <div className='grid grid-cols-2 items-center justify-center gap-3 space-x-2 p-5 lg:flex lg:justify-center'>

        <button 
        className={`${state==="All"?"bg-red-900":"bg-red-500"} p-1 rounded-lg  font-semibold font-serif`}
         onClick={AllHandler}>
            All
        </button>
       
        <button onClick={DevHandler}
                className={`${state===course.Development?"bg-red-900":"bg-red-500"} p-1 rounded-lg  font-semibold font-serif`}

        >Development</button>

        <button onClick={BusHandler}
                className={`${state===course.Business?"bg-red-900":"bg-red-500"} p-1 rounded-lg  font-semibold font-serif`}

        >Business</button>

        <button onClick={DesHandler}
                className={`${state===course.Design?"bg-red-900":"bg-red-500"} p-1 rounded-lg  font-semibold font-serif`}

        >Design</button>

        <button onClick={LifeHandler}
                className={`${state===course.Lifestyle?"bg-red-900":"bg-red-500"} p-1 rounded-lg  font-semibold font-serif`}

        >Lifestyle</button>

      </div>
    </div>
  )
}

export default Filter
