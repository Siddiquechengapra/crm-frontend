import { createSlice } from '@reduxjs/toolkit'
 
const ticketlistslice= createSlice({
    name:"ticketlist",
    initialState :{
            tickets: [],
            isLoading:false,
            error:""
    },
    reducers:{
        fetchticketloading:(state)=>{
                state.isLoading=true;
        },
        fetchticketsuccess:(state,action)=> {
            state.isLoading=false;
            state.tickets=action.payload;
        },
        fetchticketfail:(state,action)=> {
            state.isLoading=false;
            state.error=action.payload;
        }  
    }
})

export  const {reducer,actions} =ticketlistslice
export const {fetchticketfail,fetchticketsuccess,fetchticketloading}=actions

export default reducer 