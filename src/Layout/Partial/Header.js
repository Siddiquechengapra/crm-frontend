import React from 'react'
import {Navbar,Nav} from "react-bootstrap"
import logo from "/Users/Sid/Documents/CRM/crm-frontend/src/Assets/images.png"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import {LinkContainer} from "react-router-bootstrap"
import {useHistory } from "react-router-dom"

export const Header = () => {

    const history=useHistory()
    const logmeout=()=>{
        history.push("/")

    }
    
    return (
        <Navbar collapseOnSelect bg="warning" variant="light" expand="md">
            <Navbar.Brand >
            <img src={logo} alt="logo" width="50px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {/* <Link to="/dashboard">Dashboard</Link>>
                    <Link to="/tickets">Tickets</Link>>
                    <Link to="/">Logout</Link>> */}
                <LinkContainer to="/dashboard">
                    <Nav.Link>Dashboard</Nav.Link>
                    </LinkContainer>
                <LinkContainer to="/tickets">
                    <Nav.Link >Tickets</Nav.Link>
                     </LinkContainer>
                <Nav.Link onClick={logmeout}>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>                
        </Navbar>
    )
}
