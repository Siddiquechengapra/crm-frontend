import React from 'react'
import {Navbar,Nav} from "react-bootstrap"
import logo from "/Users/Sid/Documents/CRM/crm-frontend/src/Assets/images.png"

export const Header = () => {
    return (
        <Navbar collapseOnSelect bg="warning" variant="light" expand="md">
            <Navbar.Brand />
            <img src={logo} alt="logo" width="50px" />
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/dashboard">Tickets</Nav.Link>
                    <Nav.Link href="/dashboard">Logout</Nav.Link>
                </Nav>
                </Navbar.Collapse>                
        </Navbar>
    )
}
