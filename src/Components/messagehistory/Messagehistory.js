import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import "./messagehistory.css"

export const Messagehistory = ({msg}) => {
    // !msg && console.log("No Msgs from API")
    return msg.map((item,i)=>{
        return (
            <div key={i} className="message-history">
            <div className="send font-weight-bold text-secondary mt-3">
                <div className="sender font-weight-bolder text-dark">{item.messageBy}</div>
                <div className="date">{item.date}</div>
                <div className="message">{item.message}</div>

            </div>

            
        </div> 
        )
        
    })
        
    
}
