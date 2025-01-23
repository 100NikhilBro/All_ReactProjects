import React, { useEffect, useState } from 'react'
import Card from './Card';

const Cards = () => {


    const[cartData,setcartData] = useState([]);


  const ApiCall = async() =>{
        try{

            const obj  = await fetch("https://fakestoreapi.com/products") ;
            const res = await obj.json();

            setcartData(res);



        }

        catch(err){

            console.log("Error");
            setcartData([]);

        }

 


    }


    useEffect(()=>{

        ApiCall();

    },[])





  return (
    <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid lg:grid lg:grid-cols-3 lg:gap-5 lg:gap-y-9'>
      {
        cartData.map((val)=>{
            return<Card key={val.id} data={val} ></Card>
        })
      }
    </div>
  )
}

export default Cards
