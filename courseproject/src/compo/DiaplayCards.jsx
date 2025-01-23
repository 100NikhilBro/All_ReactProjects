import React, { useContext, useEffect } from 'react'
import { DisContext } from '../context/DisContext'
import Cards from './Cards';

const DiaplayCards = () => {

    const{state,course,APicall,}= useContext(DisContext);

    useEffect(()=>{
        APicall();
    },[])




    console.log()

    const dataDev = course.Development;
    const dataB = course.Business;
    const dataDe = course.Design;
    const dataL = course.Lifestyle;


// Tagdi cheej hai yeh ---> Api --> object of object of array hai to data ==> ?? --> sie aayega
//  to apne convert krna padga array of object mein simple bro 

    let AllCourses = [];
    Object.values(course).forEach(array=>{
        array.forEach(CoursesData=>{
            AllCourses.push(CoursesData);
        })
    })




    console.log(dataDev)
    console.log(dataB)
    console.log(dataDe)
    console.log(dataL)

  return (
    <div >
      <div className='flex justify-center'>

        {
            state==="All"?(<div className='grid grid-cols-1 gap-3 lg:grid lg:grid-cols-3'>
                {
                    AllCourses.map((val)=>{
                        return(<Cards {...val} key={val.id}></Cards>)
                    })
                }
            </div>):(<div></div>)
        }

        {
          state===dataDev?(<div className='grid grid-cols-1 gap-3 lg:grid lg:grid-cols-3'>
            {
                dataDev.map((val)=>{
                    return(<Cards {...val} key={val.id} ></Cards>)
                })
            }
          </div>):(<div></div>)
        }


{
          state===dataB?(<div className='grid grid-cols-1 gap-3 lg:grid lg:grid-cols-3'>
            {
                dataB.map((val)=>{
                    return(<Cards {...val} key={val.id} ></Cards>)
                })
            }
          </div>):(<div></div>)
        }

{
          state===dataDe?(<div className='grid grid-cols-1 gap-3 lg:grid lg:grid-cols-3'>
            {
                dataDe.map((val)=>{
                    return(<Cards {...val} key={val.id} ></Cards>)
                })
            }
          </div>):(<div></div>)
        }


{
          state===dataL?(<div className='grid grid-cols-1 gap-3 lg:grid lg:grid-cols-3'>
            {
                dataL.map((val)=>{
                    return(<Cards {...val} key={val.id} ></Cards>)
                })
            }
          </div>):(<div></div>)
        }
      </div>
    </div>
  )
}

export default DiaplayCards
