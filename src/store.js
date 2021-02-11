import {configureStore} from "@reduxjs/toolkit"
import ticketsreducer  from "./Pages/ticketslice"

const store=configureStore({
    reducer:{
        tickets:ticketsreducer
    },
})

export default store