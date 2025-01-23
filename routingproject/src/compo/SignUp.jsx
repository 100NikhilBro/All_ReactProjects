import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = ({setLogIn,login}) => {


    const[data,setData]=useState({
        fieldValue:"",
        fname:"",
        lname:"",
        email:"",
        create:"",
        confirm:""
    })




    function FormHadler(event){
        event.preventDefault();
    }


    function Changehandler(event){
        const{name , value} = event.target;

        setData((prevData)=>{
            return{
                ...prevData ,
                [name]:value
            }
        })
    }



    console.log(data);

    const navi = useNavigate()

    function ButtHandler(){
        if(data.create===data.confirm && data.create.length!==0){
            setLogIn(true);
             navi("/dashboard")
            return;
        }
        else{
            console.log("Password Not Matched ---- Re-Enter the password")
        }
    
    }

    const[sF,setSF] = useState(false);

    function studHandler(){

        if(!sF){
        data.fieldValue="Student";
        setSF(true);
        }
    }

    function instrucHandler(){
        if(sF){
            data.fieldValue="Instructor";
            setSF(false);
        }
    }

    console.log(sF);

   

  return (
    <div  className=''>
      <h1>SignUp Form</h1>


      <form onSubmit={FormHadler}>


        <div>
            <h1>Join the millions learning to code with StudyNotion for free</h1>
            <p>Build skills for today, tomorrow, and beyond.<span>Education to future-proof your career.</span></p>
        </div>


<div>
    
    <button onClick={studHandler}>Student</button>
    <button onClick={instrucHandler}>Instructor</button>

</div>



<div>
    <label htmlFor="fname">First Name</label>
    <input onChange={Changehandler}
    value={data.fname}
    type="text" name='fname' placeholder='Enter First Name'  id="fname"/>
</div>

<div>
    <label htmlFor="lname">Last Name</label>
    <input onChange={Changehandler}
    value={data.lname}
    type="text" name="lname" id="lname" placeholder='Enter Last Name' />
</div>

<div>
    <label htmlFor="email">Email</label>
    <input onChange={Changehandler}
    value={data.email}
    type="email" name="email" id="email" placeholder='Enter Email' />
</div>

<div>
    <label htmlFor="create">Create Password</label>
    <input onChange={Changehandler}
    value={data.create}
    type="password" name="create" id="create" placeholder='Create Password' />
</div>


<div>
    <label htmlFor="confirm">Confirm Password</label>
    <input onChange={Changehandler}
    value={data.confirm}
     type="password" name="confirm" id="confirm"  placeholder='Re-Enter Password'/>
</div>


<div>
    <button onClick={ButtHandler}>Create Account</button>
</div>


<div>
<img src="" alt=""  />
<button onClick={ButtHandler}>Sign in with Google</button>

</div>



      </form>




    </div>
  )
}

export default SignUp
