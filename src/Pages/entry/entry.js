import React,{useState} from 'react'
import "./entry.css"
import {Jumbotron} from "react-bootstrap"
import { Login } from '../../Components/Login/Login.js';
import { Forgotpassword } from '../../Components/Login/Forgotpassword';


export const Entry = () => {

    const [formLoad, setformLoad] = useState("login")
    return (
        <div className="entry-page bg-info">
           <Jumbotron className="form-box">
               {formLoad==="login" && <Login  formLoad={formLoad} setformLoad={setformLoad} />}
               {formLoad==="reset" && <Forgotpassword formLoad={formLoad} setformLoad={setformLoad}/>}

               
           </Jumbotron>
        </div>
    )
}

