import React,{useState,useEffect} from 'react'
import {Container,Row,Col, Button} from "react-bootstrap"
import { PageBreadcrumb } from '../Components/PageBreadcrumb'
import {SearchForm} from "../Components/SearchForm"
 import {Tickettable} from "../Components/Tickettable"
 import tickets from "../Assets/data/dummy-tickets.json"
 import { Link } from "react-router-dom";
import {useDispatch } from "react-redux"
import {fetchalltickets} from "../Pages/ticketaction"

export default function Ticketlist() {
    const dispatch =useDispatch()
    const [searchbarval, setsearchbarval] = useState("")


useEffect(() => {
      dispatch(fetchalltickets())
    }, [searchbarval,dispatch])





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
                    <SearchForm searchbarval={searchbarval}  />
                 </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                <Tickettable />
                </Col>
            </Row>
        </Container>
    )
}
