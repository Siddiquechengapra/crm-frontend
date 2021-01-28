import React,{useState} from 'react'
import {Container,Row,Col,Form,Button} from "react-bootstrap"

export const Login = ({formLoad,setformLoad}) => {

const [email, setemail] = useState("")
const [password, setpassword] = useState("")


const onsubmit=(e)=>{
    e.preventDefault()
    if(!email || !password){
        return alert("Fill all the values")
    }
    console.log(email,password)
    //todo :call api to submit the form

}
const onresetclick=(e)=>{
    e.preventDefault()
    setformLoad("reset")
}


const handlechange=(e)=>{
    const{name,value}=e.target
    switch(name){
        case "email":
            setemail(value)
            break
        case "password":
            setpassword(value)
            break
        default:
            break
    }
  
}

    return (
        <div>
            <Container>
                <Row>
                    <Col className="text-info text-center">
                    <h1>Client login</h1>
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
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                            onChange={handlechange}
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Enter password"
                            required />
                        </Form.Group>
                        <Button onClick={onsubmit}  type="Submit">Login</Button>
                    </Form>
                    <hr/>
                    </Col>

                </Row>
                <Row>
                    <Col className="text-info text-center">
                    <Button onClick={onresetclick}>Forgot password</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
