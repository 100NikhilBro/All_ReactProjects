import { createContext, useState } from "react";


export const FoodContext = createContext();

function FoodContextProvider({children}){

    const foodData = [
        {
            name: "Boilded Egg",
            price: 10,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8yjMvmzZ_wUpl848QfZzGbk1HQQb-ZX78y2zRRw1P7rDo0yGsmF14hO3UodEM2A9PZI4&usqp=CAU",
            type: "breakfast",
        },
        {
            name: "RAMEN",
            price: 25,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj3jxD1RXv21-kxHhZRS5EbPymboGAkP3bzRwjMoqzwK8rUAsXx9gcx52abkqwdVvcgc8&usqp=CAU",
            type: "lunch",
        },
        {
            name: "GRILLED CHICKEN",
            price: 45,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://www.eatingwell.com/thmb/p_p744h5l5VL__1CQD0IzF7-71E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6963265-84efe0ed42a34f57b9411fdbdb1e0aca.jpg",
            type: "dinner",
        },
        {
            name: "CAKE",
            price: 18,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3enbZZ384kMaXGmmFAX6SM1kt32GRardzOFmbTA8RE4HBFm2zhU9S2bR7jRFKyBfbYo&usqp=CAU",
            type: "breakfast",
        },
        {
            name: "BURGER",
            price: 23,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers-1180x580.jpg",
            type: "lunch",
        },
        {
            name: "PANCAKE",
            price: 25,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_wqJVUn1Dt8Ox8l8HpaCiDHju5kUX7kLENvhAqU_SjIz63hlDkneIzHiWrrpfK9J004g&usqp=CAU",
            type: "dinner",
        },

        {
            name:"IDLI",
            price:45,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image:"https://cdn.zeptonow.com/production///tr:w-600,ar-100-100,pr-true,f-auto,q-80/web/recipes/idli.png",
            type:"breakfast",

        },



        {
            name:"DOSA",
            price:35,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf8ZlCKTNhV3Xg4NuPq8MaZpcRJMAcWm5ABuoFVUHyqpkyZzdJq5txI0Y4E6IeOv2iezo&usqp=CAU",
            type:"dinner",

        },


        {
            name:"RASGULLA",
            price:55,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image:"https://glutenfreeindian.com/wp-content/uploads/2019/10/shutterstock_1182461014-1-1024x683.jpg",
            type:"lunch",
        }




    ];



   const[type,setType] = useState(foodData);
   const[state1,setState1] = useState(false);
   const[state2,setState2] = useState(false);
   const[state3,setState3] = useState(false);
   const[state4,setState4] = useState(false);

   const[text,setText]=useState();

   function changehandler(event){
    setText(event.target.value);
    setType(foodData.filter((textdata)=>{
        return textdata.name===text;
    }))
   
   }

   function AllHandler(){
setType(foodData);
if(!state1)
 setState1(true);
setState2(false);
setState3(false)
setState4(false)
   }

   function BreakHandler(){
    setType(foodData.filter((data)=>{
        return data.type==="breakfast";
    }))
    if(!state2){
        setState1(false);
        setState2(true);
        setState3(false)
        setState4(false)
    }
}
 

   function DinnerHandler(){
    setType(foodData.filter((data)=>{
        return data.type==="dinner";
    }))
    if(!state4){
        setState1(false);
        setState2(false);
        setState3(false)
        setState4(true)
    }

   }

   function LunchHandler(){
    setType(foodData.filter((data)=>{
        return data.type==="lunch";
    }))
    if(!state3){
        setState1(false);
        setState2(false);
        setState3(true)
        setState4(false)
    }
   }

    const value = {
        changehandler,
        foodData,
        DinnerHandler,
        LunchHandler,
           BreakHandler,
           type,
           setType,
           AllHandler,
           state1,
           setState1,
           state2,
           setState2,
           state3,
           setState3,
           state4,
           setState4,
           text,      
    }

    return<FoodContext.Provider value={value}>{children}</FoodContext.Provider>
}


export default FoodContextProvider;
