import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Logic = () => {

    const arr = [1,2,3,4,5,6];

    const navi = useNavigate();

    function InstructionHandler(){
          navi("/instructions")
    }

    const[val,setval]=useState(0);
    const[state0,setState0]=useState(false);

    function buttHandler0(){
       
        if(!state0 ){
            setState0(true);
            setState1(false);
            setState2(false);
            setState3(false);
            setState4(false)
            setState5(false);
            setval(arr[0]);
        }
        else{
            setState0(false);
           
        }
       
    }

    const[state1,setState1]=useState(false);

    function buttHandler1(){
       
        if(!state0){
            setState1(true);
            setState0(false);
            setState2(false);
            setState3(false);
            setState5(false)
            setState4(false)
            setval(arr[1]);
        }
        else{
            setState1(false);
          
        }
    }


    const[state2,setState2]=useState(false);

    function buttHandler2(){
       
        if(
            !state2 ){
            setState2(true);
            setState0(false);
            setState1(false);
            setState3(false);
            setState5(false)
            setState4(false)
            setval(arr[2]);
        }
        else{
            setState2(false);
          
        }
    }

    const[state3,setState3]=useState(false);

    function buttHandler3(){
       
        if( !state3 ){
            setState3(true);
            setState0(false);
            setState1(false);
            setState2(false);
            setState5(false)
            setState4(false)
            setval(arr[3]);
        }
        else{
            setState3(false);
           
        }
    }


    const[state4,setState4]=useState(false);

    function buttHandler4(){
       
        if(!state4 ){
            setState4(true);
            setState0(false);
            setState1(false);
            setState2(false);
            setState3(false);
            setState5(false)
            setval(arr[4]);
        }
        else{
            setState4(false);
          
        }
    }


    
    const[state5,setState5]=useState(false);

    function buttHandler5(){
       
        if(!state5){
            setState5(true);
            setState0(false);
            setState1(false);
            setState2(false);
            setState3(false);
            setState4(false);
            setval(arr[5]);
        }
        else{
            setState5(false);
        }
    }


   
    


    function ResetHandler(){
        setval(0);
        setState0(false);
        setState1(false);
        setState2(false);
        setState3(false);
        setState4(false);
        setState5(false);
        setdiceval(0);
        random.current=0;
    }

    const[diceval,setdiceval] = useState(0);

    let random = useRef(0);

    function dicehandler(){
        random.current= Math.floor(Math.random()*6)+1  ;
        if(val!==0){
        if(val===random.current){
            setdiceval((val)=> val + random.current
            )
            console.log("Matched Points Icreses");
        }
        else{
            setdiceval((val)=> val - random.current )
            console.log("Not matched value")
        }
    }
    }

    const naviii = useNavigate();

    function playHandler(){
        naviii("/")
    }


    if(diceval<=-36){
        console.log("Game is Over");
        ResetHandler();
      
    }



    console.log(random.current+" "+val+" "+diceval);


  return (


   
    <div className='bg-black sm:h-screen'>
     

     <div className='sm:flex sm:justify-between sm:p-5'>


<div>
<h1 className='text-7xl font-extrabold text-white'>{diceval}</h1>
<p className='py-2 text-xl font-bold text-white'>Your Score</p>
</div>
        <div className='sm:flex sm:flex-col'>

        <div className='grid grid-cols-3 gap-2 px-2 sm:flex sm:space-x-5'>
            <button onClick={buttHandler0}
            className={` ${state0?"bg-white text-slate-800 font-bold":"bg-black"}
            rounded-lg border border-white bg-black p-5 text-white`}>{arr[0]}</button>
            <button onClick={buttHandler1}
             className={` ${state1?"bg-white text-slate-800 font-bold":"bg-black"}
             rounded-lg border border-white bg-black p-5 text-white`}>{arr[1]}</button>

            <button  onClick={buttHandler2}
            className={` ${state2?"bg-white text-slate-800 font-bold":"bg-black"}
            rounded-lg border border-white bg-black p-5 text-white`}
            >{arr[2]}</button>

            <button onClick={buttHandler3}
            className={` ${state3?"bg-white text-slate-800 font-bold":"bg-black"}
            rounded-lg border border-white bg-black p-5 text-white`}
            >{arr[3]}</button>

            <button onClick={buttHandler4}
            className={` ${state4?"bg-white text-slate-800 font-bold":"bg-black"}
            rounded-lg border border-white bg-black p-5 text-white`}
            >{arr[4]}</button>

            <button onClick={buttHandler5}
            className={` ${state5?"bg-white text-slate-800 font-bold":"bg-black"}
            rounded-lg border border-white bg-black p-5 text-white`}
            >{arr[5]}</button>




        </div>
        <div>
            <h1 className='p-10 text-xl font-bold text-white'>Select a Number to Start a Game</h1>
        </div>
        </div>

     
     </div>


     
    <div>

    <div>
        <button onClick={dicehandler}>

            {
                random.current===0?(<div>
                    <img className='h-[400px] w-[400px] rounded-full bg-black'
                    src="https://img.pikbest.com/wp/202346/dice-black-background-3d-render-opposite-faces-total-7-on-common_9623162.jpg!w700wp" alt="" />
                </div>

                ):(<div></div>)
            }


        


            {
                random.current===1?(<div>
                    <img className='h-[400px] w-[400px] rounded-full bg-black p-5'
                    src="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.png" alt="" />

                </div>):(<div></div>)

            }


{
                random.current===2?(<div>

                    <img  className='h-[400px] w-[400px] rounded-full bg-black p-5'
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqD6PlwHmA6rRzqvd4KwGUleBT2BgYgZPSql-LjZGRCyGR0y5iG_yK-mOtyTclvyXvyY&usqp=CAU" alt="" />

                </div>):(<div></div>)

            }



{
                random.current===3?(<div>

                    <img  className='rounded-lg bg-black p-5'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMwE59bvvsoxu884BmDWET6iFrRzLpD1Vr97SKnFx00VPE_7fspc1F4ng7ffak_papMGk&usqp=CAU" alt="" />

                </div>):(<div></div>)

            }




{
                random.current===4?(<div>

<img  className='h-[400px] w-[400px] rounded-full bg-black p-5'
                    src="https://static-00.iconduck.com/assets.00/dice-six-faces-four-icon-2048x2048-q612x0mr.png" alt="" />


                </div>):(<div></div>)

            }




{
                random.current===5?(<div>

                    
<img  className='h-[400px] w-[400px] rounded-full bg-black p-5'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs9ys4JLlTbm3U0auy8JhgLm_cqk077vPaug&s" alt="" />

                </div>):(<div></div>)

            }





{
                random.current===6?(<div>                                      
<img  className='h-[400px] w-[400px] rounded-full bg-black p-5' 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRN9kcOFU0Q-LoWHDVonNJelfKMF7NqqcAyf34roXhIIUtLFN9K6NspHS17ZFsSoS6aA&usqp=CAU" alt="" />
                </div>):(<div></div>)

            }


        {/* <img className='rounded-full bg-black p-5'
         src="https://media.istockphoto.com/id/1198393778/photo/black-casino-dice.jpg?s=612x612&w=0&k=20&c=eVtjdMPx8OoetX_DF9Oj1ZXMTbPHZU1tdHGoluIC1LU=" alt="" /> */}
        </button>
       
     </div>

     <div>
        <h1 className='p-5 text-xl font-bold text-white'>Click on Dice to Roll</h1>
     </div>

        <div className='flex justify-center'>
        <div className='flex w-fit flex-col gap-3'>
        <button className='rounded-lg bg-white p-2 font-bold text-black transition-all duration-200 hover:bg-black hover:text-white hover:shadow-sm hover:shadow-white'
         onClick={ResetHandler}>Reset Score</button>
        <button className='rounded-lg bg-white p-2 font-bold text-black transition-all duration-200 hover:bg-black hover:text-white hover:shadow-sm hover:shadow-white'
       onClick={InstructionHandler}>Instruction</button>
     </div>
        </div>
   






    </div>



    <div>
        <button onClick={playHandler} 
        className='p-5 text-5xl font-extrabold text-slate-400'>Back to Play</button>
    </div>







     



    </div>
  )
}



export default Logic




