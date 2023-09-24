import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'


  export const store = configureStore({
    reducer: {},
  });
  
 
  
  export type RootSate = ReturnType<typeof store.getState>
  export const useAppSelector: TypedUseSelectorHook<RootSate> = useSelector
  