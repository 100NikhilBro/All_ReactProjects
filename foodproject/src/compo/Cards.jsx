

const Cards = ({name,price,text,image}) => {



  return (

    <div className="">

    <div className="flex justify-center pt-7 ">

        <div className="flex justify-center p-2 transition-all duration-200 border rounded-lg opacity-30 hover:opacity-100 w-fit group hover:shadow-md hover:shadow-slate-50">

            <div className="">
                <img className=" hidden sm:flex sm:mt-4 lg:h-[90px] lg:w-[90px] lg:mt-10
                xl:h-[100px] xl:w-[100px] sm:h-[100px] sm:w-[100px] rounded-full  lg:rounded-full opacity-10 group-hover:opacity-100 transition-all duration-200"
                 src={image} alt="" />
            </div>

            <div className="flex flex-col justify-start items-start space-y-2  w-[250px] p-2">
            <h1 className="font-semibold">{name}</h1>
            <p className="text-left">{text}</p>

            <div className="pt-10 pl-36">
                <div className="p-2 font-bold bg-red-500 rounded-lg">
                ${price}.00
                </div>
               
            </div>

          
           
        </div>
        
      
    </div>
    </div>

    </div>
  )

}

export default Cards
