import{fetchticketfail,fetchticketsuccess,fetchticketloading}
from "./ticketslice"
import axios from "axios"



export const fetchalltickets=()=> async(dispatch)=>{
    
      dispatch(fetchticketloading()) 
      //ftching dats from api 
      try{

        const result=await axios.get("http://localhost:3001/v1/ticket/",{
            headers:{
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsMUBnbWFpbC5jb20iLCJpYXQiOjE2MTMwNzQwNDAsImV4cCI6MTYxMzE2MDQ0MH0.CYCbBL369x3gp8HNdhHpAnZ-abpL1HRpxngu6x1USak"
            }
        } )
        
          console.log("result from the backend :",result) 
          dispatch(fetchticketsuccess(result.data.result))
      }
      catch(error){
            dispatch(fetchticketfail(error.message )) 

      }

}

