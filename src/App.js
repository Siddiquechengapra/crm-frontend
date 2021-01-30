import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap"
import { Entry } from './Pages/entry/entry.js';
import { Defaultlayout } from './Layout/Defaultlayout';


function App() {
  return (
    <div className="App">
     {/* <Entry /> */}
     <Defaultlayout>New main content</Defaultlayout>
    </div>
  );
}

export default App;
