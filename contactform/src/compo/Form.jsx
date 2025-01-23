import React, {useState } from 'react'

const Form = () => {


    const[data,setData] = useState({
        fname:"",
        lname:"",
        email:"",
        country:"",
        street:"",
        city:"",
        state:"",
        code:"",
        comments:"",
        candidates:"",
        offers:"",
        notify:""
    })

    function changeHandler(event){

        const{name,type,checked,value}=event.target;

        setData((prevdata)=>{
            return{
                ...prevdata ,
                [name]:type==="checkbox"?checked:value
            }
        })
    
    }

    console.log(data);



    function submitHandler(event){
        event.preventDefault();
    }

  return (


    <div>
      
      <form onSubmit={submitHandler}>
        
        <div className='flex justify-center space-x-5'>

            <div className='flex flex-col'>
            <label htmlFor="fname">First Name: </label>
        <input onChange={ changeHandler}
        value={data.fname}
         type="text" name="fname" id="fname" placeholder='Enter the First Name' />
            </div>


            <div className='flex flex-col'>
            <label htmlFor="lname">Last Name: </label>
        <input onChange={ changeHandler}
        value={data.lname}
         type="text" name="lname" id="lname"  placeholder='Enter the Last Name' />

            </div>
      

       
        </div>



<div className='flex justify-center'>
    <div className='flex flex-col'>
    <label htmlFor="email">Email Address</label>
        <input onChange={ changeHandler}
        value={data.email}
         type="email" name="email" id="email"  placeholder='Enter your Email' />
    </div>

</div>

        

       <div className='flex justify-center space-x-5'>

        <div className='flex flex-col'>
        <label htmlFor="country">Country</label>
        <select onChange={ changeHandler}
        value={data.country}
         name="country" id="country">
            <option value="India">India</option>
            <option value="SouthAfrica">SouthAfrica</option>
            <option value="Pakistan">Pakistan</option>
            <option value="London">London</option>
            <option value="Afghanistan">Afghanistan</option>
        </select>
        </div>

        <div className='flex flex-col'>
        <label htmlFor="street">Street Address</label>
        <input onChange={ changeHandler}
        value={data.street}
         type="text" name="street" id="street"  placeholder='Enter the Street Address' />
        </div>
    
       </div>




       <div className='flex justify-center'>

        <div className='flex flex-col'>
        <label htmlFor="city">City</label>
        <input onChange={ changeHandler}
        value={data.city}
         type="text" name="city" id="city" placeholder='Enter the City' />
        </div>
       

       <div  className='flex flex-col'>
       <label htmlFor="state">State/Province</label>
        <input onChange={ changeHandler}
        value={data.state}
         type="text" name="state" id="state" placeholder='Enter your State / Province' />
       </div>

       
       <div className='flex flex-col'>
       <label htmlFor="code">ZIP/Postal Code</label>
        <input  onChange={ changeHandler}
        value={data.code}
        type="text" name="code" id="code" placeholder='Enter the ZIP / Postal Code' />
       </div>

       
       </div>


       


        <div>

            <h1>By Email</h1>

        <input onChange={ changeHandler}
        checked={data.comments}
         type="checkbox" name='comments' id='comments' />Comments
        <p>Get notified when someone posts a comment on posting.</p>

        <input onChange={ changeHandler}
        checked={data.candidiates}
        type="checkbox" name='candidates' id='candidates' />Candidates
        <p>Get notified when a candidate apply for a job.</p>


        <input onChange={ changeHandler}
        checked={data.offers}
         type="checkbox" name='offers' id='offers' />Offers
        <p>Get notified when candidate accepts and reject an offer.</p>


        </div>


      <label htmlFor="notify">Push Notification</label>
        <p>These are delivered via SMS to your mobile phone.</p>

        <input onChange={ changeHandler}
        checked={data.notify==="Everything"}
         type="radio" name="notify" id="Everything"  value="Everything"/> Everything
         
        <input onChange={ changeHandler}
        checked={data.notify==="Same as email"}
        type="radio" name="notify" id="Same as email" value="Same as email" />Same as email

        <input onChange={ changeHandler}
        checked={data.notify==="No push notification"}
         type="radio" name="notify" id="No push notification" value="No push notification" />No push notification


        <button>Submit</button>




      </form>

    </div>
  )
}

export default Form

