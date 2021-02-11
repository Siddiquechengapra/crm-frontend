import React from 'react'
import {Table} from "react-bootstrap"
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux"

export const Tickettable = () => {

    const {tickets,isLoading,error}=useSelector((state)=>state.tickets);

    if(isLoading) return <h3>Loading ...</h3> 
    if(error)return <h3>{error}</h3>
    return (
        <Table striped bordered hover>``
            <thead>
                <tr><th>#</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Opened at</th></tr>
            </thead> 
            <tbody>
            {tickets.length ?tickets.map((item)=>{return(
                <tr key={item._id}>
                    <td>{item._id}</td>
                    <td><Link  to={`/ticket/${item.id}`}>{item.subject} </Link></td>
                    <td>{item.status}</td>
                    <td>{item.openAt}</td>
                </tr>
)}) : <tr> <td colSpan="4" className="text-center" >No Tickets to display</td></tr> }
                
            </tbody>
        </Table>
    )
}
