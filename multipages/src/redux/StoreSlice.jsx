import { createSlice } from "@reduxjs/toolkit";





export const StoreSlice = createSlice(
  
    {
        name:"Cart",

        initialState : {
            arr:[]
          },

        reducers:{

            addItem : (state,action)=>{
               state.arr.push(action.payload);
            },


            removeItem:(state,action)=>{
                state.arr = state.arr.filter((cart) => cart.id !== action.payload)
            }
            
        }
    }
);


export const{addItem,removeItem} = StoreSlice.actions;
export default StoreSlice.reducer;




