import React from 'react'
import {Route,Redirect} from "react-router-dom"
import { Defaultlayout } from '../../Layout/Defaultlayout';




const isAuth=true
export const Privateroute = ({children,...rest}) => {
    
    return (
        <Route {...rest}
        render={()=>{
            
            return (
                isAuth ? <Defaultlayout>{children}</Defaultlayout> : <Redirect to="/"/>  
                
                )
           
        }}  />

        
    )
}
