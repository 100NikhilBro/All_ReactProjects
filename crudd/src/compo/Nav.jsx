import React from 'react'

const Nav = () => {
    
    const arr = [
        {
            val:"A",
            index:1,
            isComplete:false,
        },
        {
            val:"B",
            index:2,
            isComplete:false,
        },
        {
            val:"C",
            index:3,
            isComplete:false,
        },
        {
            val:"D",
            index:4,
            isComplete:false,
        },
        {
            val:"E",
            index:5,
            isComplete:false,
        }
    ]


    function DelHandler(id){
    arr.filter((data)=>{
        return data.index!==id;
    })
    }



    function EditHandler(id){
    arr.forEach((data)=>{
        data.index===id?data.isComplete=true:data.isComplete=false;
    })
    }


    

    
    
    
  return (
    <div>
      <div>
        {
            arr.map((data)=>{
                return<div>{data.val}
                <button onClick={()=>DelHandler(data.index)}>Delete</button>
                <button onClick={EditHandler}>Edit</button>
                </div>

            })
        }
      </div>

    </div>
  )
}

export default Nav
