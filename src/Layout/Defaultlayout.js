import React from 'react'
import { Header } from './Partial/Header'
import { Footer } from './Partial/Footer'
import "/Users/Sid/Documents/CRM/crm-frontend/src/App.css"




export const Defaultlayout = ({children}) => {
    return (
        <div className="default-layout"> 
        <div className="header">
        <Header />
        </div> 
        <div className="main mt-4">
        {children}
         </div>
         <div className="footer">
        <Footer />
        </div>
        
        </div>
    )
}
