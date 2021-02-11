import React,{useState} from 'react'
 import {Form,Row,Col} from "react-bootstrap"
 import tickets from "../Assets/data/dummy-tickets.json"
 import{useDispatch} from "react-redux"



export const SearchForm = ({searchbarval}) => {
    
    const handlechange=e=>{
        const{value}=e.target
        


    }
    return (
        <div>
            <Form>
                <Form.Group as= {Row}> 
                    <Form.Label column sm={2}>Search here{" "}
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control   
                    name="Searchstr"
                    onChange={handlechange} 
                    
                    placeholder="Search ..." />
                    </Col>

                </Form.Group>
            </Form>
        </div>
    )
}
