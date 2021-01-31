import React,{useState,useEffect} from 'react'
import {Container,Row,Col, Button} from "react-bootstrap"
import { PageBreadcrumb } from '../Components/PageBreadcrumb'
import {SearchForm} from "../Components/SearchForm"
 import {Tickettable} from "../Components/Tickettable"
 import tickets from "../Assets/data/dummy-tickets.json"
 import { Link } from "react-router-dom";


export default function Ticketlist() {
    const [searchbarval, setsearchbarval] = useState("")
    const [disptickets, setdisptickets] = useState(tickets)

// useEffect(() => {
      
//     }, [searchbarval,disptickets])


const handlechange=(e)=>{
        const {value}=e.target
        setsearchbarval(value) 
        searchTicket(value)
        
        }
const searchTicket=(sttr)=>{
const displaytickets=tickets.filter((item)=>{
   
               return  item.subject.toLowerCase().includes(sttr.toLowerCase())
                
            })
            console.log("displayt:",displaytickets)
            setdisptickets(displaytickets)

        }

     return (
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="Ticket Lists" />
                
                </Col>
            </Row>
            <Row>
                <Col>
                <Link to="/addticket" ><Button>Add new ticket</Button></Link>
                </Col>
                <Col className="text-right">
                    <SearchForm handlechange={handlechange} searchbarval={searchbarval}  />
                 </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                <Tickettable tickets={disptickets} />
                </Col>
            </Row>
        </Container>
    )
}
