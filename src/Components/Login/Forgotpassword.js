import React,{useState} from 'react'
import {Container,Row,Col,Form,Button} from "react-bootstrap"

export const Forgotpassword = ({formLoad,setformLoad}) => {

const [email, setemail] = useState("")


const onresetsubmit=(e)=>{
    e.preventDefault()
    
    if(!email){
        return alert("please provide email")
    }
    console.log(email)
    //todo :call api to submit the form

}

const handlechange=(e)=>{
    const{name,value}=e.target
    switch(name){
        case "email":
            setemail(value)
            break
        
        default:
            break
    }
   
}


const onloginclick=(e)=>{
    e.preventDefault()
    setformLoad("login")
}

    return (
        <div>
            <Container>
                <Row>
                    <Col className="text-info text-center">
                    <h1>Reset Password</h1>
                    <Form autoComplete="off">
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                            type="email"
                            name="email"
                            value={email}
                            onChange={handlechange}
                            placeholder="Enter mail"
                            required
                             />
                        </Form.Group>
                        
                        <Button onClick={onresetsubmit}  type="Submit">Reset password</Button>
                    </Form>
                    <hr/>
                    </Col>
 
                </Row>
                <Row>
                    <Col className="text-info text-center">
                    <Button onClick={onloginclick}>Log in Now</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
