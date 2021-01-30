import React from 'react'
import {Container , Row, Col, Button, Breadcrumb} from "react-bootstrap"
import { PageBreadcrumb } from '../Components/PageBreadcrumb'
import { Addticketform } from '../Components/Addticketform'
const initialFrmDt={
    subject:"",
    issueDate:"",
    deatils:""
} 




export const Addticket = () => {
    return (
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="Add new ticket"></PageBreadcrumb>

                </Col>
            </Row>
            <Row>
                <Col>
                <Addticketform initialFrmDt={initialFrmDt} />

                </Col>
            </Row>


            
        </Container>
    )
}
