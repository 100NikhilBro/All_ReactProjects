import {configureStore} from '@reduxjs/toolkit';
import { StoreSlice } from './StoreSlice';



export const AppStore = configureStore({
    reducer:
    {
      Cart:StoreSlice.reducer,
    }

})

export default AppStore;