import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Button} from "react-bootstrap"
import { PageBreadcrumb } from '../Components/PageBreadcrumb'
import tickets from "../Assets/data/dummy-tickets.json"
import {Messagehistory} from "../Components/messagehistory/Messagehistory.js"
import {Updateticket} from "../Components/Updateticket.js"


export const Ticket = () => {
const [message,setmessage] = useState("")

const handleonsubmit=()=>{
    alert("submitted")
}

    const handlechange=(e)=>{
            const{value}=e.target
            setmessage(value)
            console.log(message)
    }

    useEffect(() => {
        
    }, [message])

    let tick=tickets[0]
    return (
        <Container>
            <Row>
                <Col>
                 <PageBreadcrumb page="Inside new ticket" />
                  </Col>
            </Row>
            <Row>
                <Col className="font-weight-bold">
                 <div className="subject">Subject:{tick.subject}</div>
                 <div className="date">Date:{tick.addedAt}</div>
                 <div className="status">Status:{tick.status}</div>
                 </Col>
                 <Col>
                 <Button variant="outline-info">Close Ticket</Button>
                 </Col>
                 
            </Row>
            <Row className="mt-4">
                <Col>
                <Messagehistory msg={tick.history}/>
                </Col>
            </Row>
            < hr/>
            <Row className="mt-4">
                <Col>
                 <Updateticket message={message} handlechange={handlechange} handleonsubmit={handleonsubmit}/>
                </Col>
            </Row>

        </Container>
    )
}
