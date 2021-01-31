import React from 'react'
import {Table} from "react-bootstrap"
import { Link } from 'react-router-dom'


export const Tickettable = ({tickets}) => {

    
    return (
        <Table striped bordered hover>
            <thead>
                <tr><th>#</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Opened at</th></tr>
            </thead> 
            <tbody>
            {tickets.length ?tickets.map((item)=>{return(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td><Link  to={`/ticket/${item.id}`}>{item.subject} </Link></td>
                    <td>{item.status}</td>
                    <td>{item.addedAt}</td>
                </tr>
)}) : <tr> <td colSpan="4" className="text-center" >No Tickets to display</td></tr> }
                
            </tbody>
        </Table>
    )
}
