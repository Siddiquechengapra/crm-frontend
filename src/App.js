import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap"
import { Entry } from './Pages/entry/entry.js';
import Dashboard from './Pages/dashboard/Dashboard';
import { Addticket } from './Pages/Addticket';
import Ticketlist from './Pages/Ticketlist';
import {Ticket} from './Pages/Ticket';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import {Privateroute} from "./Components/privateroute/Privateroute"






function App() {
  return (
    <div className="App">
      <Router>
        <Switch> 
        <Route exact path="/"><Entry /></Route>
           
           
          <Privateroute path="/dashboard"> <Dashboard /> </Privateroute>
          <Privateroute path="/addticket">  <Addticket /> </Privateroute>
          <Privateroute path="/tickets"> <Ticketlist /></Privateroute>
          <Privateroute path="/ticket/:tId"><Ticket /></Privateroute>
         
        </Switch>
       
      </Router>
     
    </div>
  );
}

export default App;
