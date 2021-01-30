import React,{useState} from 'react'
 import {Form,Row,Col} from "react-bootstrap"
 import tickets from "../Assets/data/dummy-tickets.json"


export const SearchForm = ({handlechange,searchbarval}) => {
    
    
    return (
        <div>
            <Form>
                <Form.Group as= {Row}>
                    <Form.Label column sm={2}>Search here{" "}
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control 
                    
                    onChange={handlechange} 
                    value={searchbarval}
                    placeholder="Search ..." />
                    </Col>

                </Form.Group>
            </Form>
        </div>
    )
}
