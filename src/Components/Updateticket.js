import React from 'react'
import {Form,Container,Row,Col,Button} from "react-bootstrap"

export const Updateticket = ({message,handlechange,handleonsubmit}) => {
    return (
        <Form onSubmit={handleonsubmit} >
            <Form.Label>Reply</Form.Label>
            <Form.Text>Please provide your reply here </Form.Text>
            <Form.Control
            value={message} 
            onChange={handlechange}
            as="textarea"
            name="detail"
            row="5" />
        <div className="text-right">
        <Button className="mt-4 mb-3" variant="info" type="Submit">Reply</Button>
        </div>   
            
        </Form>
    )
}
