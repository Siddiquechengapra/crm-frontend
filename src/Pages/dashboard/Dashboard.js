import React from 'react'
import {Container , Row, Col, Button, Breadcrumb} from "react-bootstrap"
import { Tickettable } from '../../Components/Tickettable'
import tickets from "../../Assets/data/dummy-tickets.json"
import { PageBreadcrumb } from '../../Components/PageBreadcrumb'



export default function Dashboard() {
    return (
       <Container>
           <Row>
               <Col>
               <PageBreadcrumb page="Dashboard"/>
               </Col>
           </Row>
           <Row>
               <Col className="text-center">
                <Button style={{'font-size':'2rem','padding':'10px 30px'}}>Add new Ticket</Button>
               </Col>
               
           </Row>
           <Row>
               <Col className="text-center">
                <div>
                    Total tickets : 50
                </div>
                <div>
                    Pending : 5
                </div>
               </Col>
               
           </Row>
           <Row>
               <Col className="mt-2">
                Recently added tickets
               </Col>
               
           </Row>
           <Row>
               <Col className="recent-ticket ">
                <Tickettable tickets={tickets} />
               </Col>
               
           </Row>
       </Container>
    )
}
