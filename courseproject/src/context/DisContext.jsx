import { createContext, useState } from "react";


export const DisContext = createContext();

function DisContextProvider({children}){

    // State bn gyi

    const[state,setState] = useState("All");
    const[course,setCourse] = useState([]);


    // Api Call ho gya

    async function APicall() {
        try{
            const obj =await fetch("https://codehelp-apis.vercel.app/api/get-top-courses");
            const val = await obj.json();
            setCourse(val.data);
        }
        catch(e){
            console.log("Eroror aa gya");
        }
    }



    // Logic + State Mangement

    function DevHandler(){
        setState(course.Development);
    }

    function BusHandler(){
        setState(course.Business);
    }

    function DesHandler(){
        setState(course.Design);
    }

    function LifeHandler(){
        setState(course.Lifestyle);
    }


    function AllHandler(){
        setState("All");
    }


    // Object --> sare name pass ho gye

    const data = [{
        id: 1,
        name: "All"
    },
    {
        id: 2,
        name: "Development"
    },
    {
        id: 3,
        name: "Business"
    },
    {
        id: 4,
        name: "Design"
    },
    {
        id: 5,
        name: "Lifestyle"
    }
]
const value = {
    data,
    course,
    setCourse,
    APicall,
    DisContext,
    DisContextProvider,
    state,
    setState,
    DesHandler,
    DevHandler,
    BusHandler,
    LifeHandler,
    AllHandler,
}


return<DisContext.Provider value={value}>{children}</DisContext.Provider>

}

export default DisContextProvider;