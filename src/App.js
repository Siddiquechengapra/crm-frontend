import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap"
import { Entry } from './Pages/entry/entry.js';
import { Defaultlayout } from './Layout/Defaultlayout';
import Dashboard from './Pages/dashboard/Dashboard';
import { Addticket } from './Pages/Addticket';
import Ticketlist from './Pages/Ticketlist';





function App() {
  return (
    <div className="App">
     {/* <Entry /> */}
     <Defaultlayout>
       {/* <Dashboard /> */}
       {/* <Addticket /> */}
       <Ticketlist />
    </Defaultlayout>
    </div>
  );
}

export default App;
