import React, { useState } from 'react'

const Cards = () => {


    const[value,setvalue] = useState("");

    function ChangeHandler(event){
        setvalue(event.target.value);
    }

    const[arr,setarr] = useState([]);

    function AddHandler(){
        if(value!==""){
        setarr([...arr,{value , index : arr.length+1 , check:false}]);
        setvalue("");
        }
       
    }



    function DeleteHandler(id){
        setarr(arr.filter(obj=>obj.index!==id));
    }

   


    // samjoo bhai smajoo
    function checkHandler(id){
        setarr(arr.map(obj => (obj.index === id ? { ...obj, check: !obj.check } : obj)));
    }

    // function checkHandler(id){
    //     arr.forEach((data)=>{
    //         data.index===id?data.check=true:data.check=false;
    //     })
    //     }




    function clrhandler(check){
    setarr(arr.filter((obj)=>obj.check!==check))
    }
 
    const[newValue,setnew] = useState("");

    function editHandler(id,event){
        setnew(event.tartget.value);
        setarr(arr.map((obj)=>obj.index===id? {...obj , value:newValue} : obj))
    }




    console.log(arr)
    





  return (
    <div>

      <div>
        <input onChange={ChangeHandler} type="text" placeholder='Add Your tasks' value={value}/>
        <button onClick={AddHandler}>Add</button>
      </div>


      <div>
        {
            arr.map((val)=>{
                return<div {...val}>
                    
                    <input onChange={()=>checkHandler(val.index)}
                    type="checkbox" name="" id="" checked={val.check} />
                    {val.value}

                    <button onClick={()=>editHandler(val.index)}>Edit</button>
                <button onClick={()=>DeleteHandler(val.index)}>Delete</button>

                
                </div>
            })
        }
      </div>

      <button onClick={()=>clrhandler()}>Clear Checked Task</button>
    </div>
  )
}

export default Cards
