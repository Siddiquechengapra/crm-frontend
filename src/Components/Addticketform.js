import React,{useState,useEffect} from 'react'
 import {Jumbotron,Form,Button,Col, Row} from "react-bootstrap"
 import  "/Users/Sid/Documents/CRM/crm-frontend/src/App.css"

export const Addticketform = ({initialFrmDt}) => {

    const [frmData, setfrmData] = useState(initialFrmDt)
    // useEffect(() => {
        
    // }, [frmData])

const handlechange=(e)=>{
const {name,value}=e.target
setfrmData({ 
    ...frmData,
    [name]:value
})
console.log(name,value)
}

const handleOnSubmit=(e)=>{
    e.preventDefault()
    console.log("Form Submitted",frmData)

}
  
    return (
        <Jumbotron className="mt-3 add-new-ticket bg-muted">
            <h1 className="text-center text-primary">Add new ticket</h1>
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                        <Form.Group as ={Row}>
                            <Form.Label column sm={3}>Subject</Form.Label>
                            <Col sm={9}>
                            <Form.Control
                            type="text"
                            name="subject"
                            minLength="4"
                            value={frmData.subject}
                            onChange={handlechange}
                             
                             />
                            </Col> 
                            
                        </Form.Group>
                        <Form.Group as ={Row}>
                            <Form.Label column sm={3}>issueDate</Form.Label>
                            <Col sm={9}>
                            <Form.Control
                            onChange={handlechange}
                            type="date"
                            name="issueDate"
                             value={frmData.issueDate}
                            
                            required />
                            </Col>
                            
                        </Form.Group>
        <Form.Group>


          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows="5"
            value={frmData.details}
            onChange={handlechange}
            required
          />
        </Form.Group>
    
                        <Button block onClick={onsubmit}  type="Submit">Login</Button>
        </Form>



        
        </Jumbotron>
    )
}
 